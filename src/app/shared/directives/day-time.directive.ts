import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[dayTime]'
})
export class DayTimeDirective {
  constructor(private control: NgControl) { }

  @HostListener('input', ['$event'])
  onInput(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    let cursorPosition = input.selectionStart || 0;
    const isDeleteContentBackward = event.inputType === 'deleteContentBackward';
    const isDeleteContentForward = event.inputType === 'deleteContentForward';
    const segments = this.parseTimeString(input.value);

    let oldValue = '';
    if (isDeleteContentBackward || isDeleteContentForward) {
      let newValue = input.value.slice(0, cursorPosition) + '0' + input.value.slice(cursorPosition);
      if (segments.length != 3) {
        newValue = input.value.slice(0, cursorPosition) + ':' + input.value.slice(cursorPosition);
      }

      if (this.control.control) {
        this.control.control.setValue(newValue, { emitEvent: false });
      }
      input.value = newValue;
      this.setCursorPosition(input, cursorPosition, isDeleteContentBackward || isDeleteContentForward);
      return;
    }
    else {
      oldValue = input.value.slice(0, cursorPosition - 1) + input.value.slice(cursorPosition);
    }
    // // Split current value into segments
    const oldValueSegments = this.parseTimeString(oldValue);

    let rs = [];
    // Xử lý phần giờ (segment đầu tiên)
    if (this.isChangeHour(segments, oldValueSegments)) {
      let differentPosition = this.findDifferentPosition(segments[0], oldValueSegments[0]);
      let newSegments = segments[0].split('');
      let oldSegments = oldValueSegments[0].split('');
      if (differentPosition == 0) {
        rs.push(newSegments[0] + oldSegments[1]);
      } else if (differentPosition == 1) {
        rs.push(newSegments[0] + newSegments[1]);
      } else {
        rs.push(oldValueSegments[0]);
      }
      // }
    } else {
      rs.push(segments[0]);
    }
    if (this.isChangeMinute(segments, oldValueSegments)) {

      let differentPosition = this.findDifferentPosition(segments[1], oldValueSegments[1]);
      let newSegments = segments[1].split('');
      let oldSegments = oldValueSegments[1].split('');
      if (differentPosition == 0) {
        rs.push(newSegments[0] + oldSegments[1]);
      } else if (differentPosition == 1) {
        rs.push(newSegments[0] + newSegments[1]);
      } else {
        rs.push(oldValueSegments[1]);
      }
    }
    else {
      rs.push(segments[1]);
    }
    if (this.isChangeSecond(segments, oldValueSegments)) {

      let differentPosition = this.findDifferentPosition(segments[2], oldValueSegments[2]);
      let newSegments = segments[2].split('');
      let oldSegments = oldValueSegments[2].split('');
      if (differentPosition == 0) {
        rs.push(newSegments[0] + oldSegments[1]);
      } else if (differentPosition == 1) {
        rs.push(newSegments[0] + newSegments[1]);
      } else {
        rs.push(oldValueSegments[2]);
      }
    }
    else {
      rs.push(segments[2]);
    }
    for (let i = 1; i < rs.length; i++) {
      if (parseInt(rs[i]) > 59) {
        rs[i] = '59';
      }
    }

    input.value = rs.join(':');

    if (this.control.control) {
      this.control.control.setValue(input.value, { emitEvent: false });
    }
    this.setCursorPosition(input, cursorPosition, isDeleteContentBackward || isDeleteContentForward);
  }
  private setCursorPosition(input: HTMLInputElement, cursorPosition: number, isDelete: boolean): void {
    if (isDelete) {
      if (cursorPosition == 6) {
        cursorPosition = 5;
      }
      else if (cursorPosition == 3) {
        cursorPosition = 2;
      }
    }
    else {
      if (cursorPosition == 2) {
        cursorPosition = 3;
      }
      else if (cursorPosition == 5) {
        cursorPosition = 6;
      }
      else if (cursorPosition >= 8) {
        cursorPosition = 0;
      }
    }
    input.setSelectionRange(cursorPosition, cursorPosition);
  }
  isChangeHour(segments: string[], oldValueSegments: string[]): boolean {
    return segments[0] !== oldValueSegments[0];
  }
  isChangeMinute(segments: string[], oldValueSegments: string[]): boolean {
    return segments[1] !== oldValueSegments[1];
  }
  isChangeSecond(segments: string[], oldValueSegments: string[]): boolean {
    return segments[2] !== oldValueSegments[2];
  }
  private parseTimeString(timeString: string): string[] {
    return timeString.split(':');
  }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    // Allow: backspace, delete, tab, escape, enter, arrows
    const allowedKeys = [8, 9, 13, 27, 37, 38, 39, 40, 46];
    if (
      allowedKeys.includes(event.keyCode) ||
      // Allow: Ctrl+A
      (event.keyCode === 65 && event.ctrlKey === true) ||
      // Allow: numbers
      (event.keyCode >= 48 && event.keyCode <= 57) ||
      (event.keyCode >= 96 && event.keyCode <= 105)
    ) {
      return;
    }
    event.preventDefault();
  }
  private findDifferentPosition(str1: string, str2: string): number {
    const minLength = Math.min(str1.length, str2.length);

    // So sánh từng ký tự
    for (let i = 0; i < minLength; i++) {
      if (str1[i] !== str2[i]) {
        return i;
      }
    }

    // Nếu một chuỗi dài hơn chuỗi còn lại
    if (str1.length !== str2.length) {
      return minLength;
    }

    // Nếu hai chuỗi giống nhau hoàn toàn
    return -1;
  }
}

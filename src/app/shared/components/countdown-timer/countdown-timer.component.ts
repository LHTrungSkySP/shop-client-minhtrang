import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lht-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.scss'
})
export class CountdownTimerComponent implements OnInit, OnDestroy{
  //#region field
  /**
   * start countDown - second
   */
  @Input() startCount = 60;
  /**
   * active count
   */
  isFirst: boolean = true;
  _active = false;
  @Input() set active(value: boolean) {
    this._active = value;
    if (this.isFirst) return;
    this.toggleCount();
  }
  get active() {
    return this._active;
  }
  @Output() activeChange = new EventEmitter<boolean>();

  interval_Mng: any = null;
  hourView: number = 0;
  minuteView: number = 0;
  secondView: number = 0;
  //#endregion

  ngOnInit(): void {
    if (this.active) {
      this.start();
    }
    else{
      this.updateTimer(this.startCount);
    }
    this.isFirst = false;
  }
  ngOnDestroy(): void {
    this.stop();
  }

  toggleCount() {
    this.active ? this.start() : this.stop();
  }
  stop() {
    if (this.interval_Mng) {
      clearInterval(this.interval_Mng); // Dọn dẹp interval khi component bị hủy
    }
  }
  start() {
    if(this.isComplete) return;

    this.interval_Mng = setInterval(() => {
      this.startCount--;
      if (this.startCount <= 0) {
        this.complete();
      }
      this.updateTimer(this.startCount);
    }, 1000);
  }
  isComplete = false;
  @Output() onComplete = new EventEmitter();
  complete() {
    this.stop();
    this.isComplete = true;
    this.activeChange.emit(false);
    this.onComplete.emit();
  }
  updateTimer(second: number) {
    this.hourView = Math.floor(second / 3600);
    let minuteSecond = second - this.hourView * 3600;
    this.minuteView = Math.floor(minuteSecond / 60);
    this.secondView = minuteSecond - this.minuteView * 60;
  }
}

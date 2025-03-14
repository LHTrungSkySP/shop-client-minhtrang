import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'lht-inputhhmmss',
  templateUrl: './inputhhmmss.component.html',
  styleUrls: ['./inputhhmmss.component.scss']
})
export class InputhhmmssComponent implements OnInit {
  // @ViewChild('target') input!: ElementRef;
  @Output() eventChangeValue = new EventEmitter<any>();

  tempVariable = '15:00:00';
  constructor() { }

  ngOnInit(): void {
  }
  emitValue(event: any) {
    this.eventChangeValue.emit(event.target.value);
  }
}

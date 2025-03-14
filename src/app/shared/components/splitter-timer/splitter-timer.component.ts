import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lht-splitter-timer',
  templateUrl: './splitter-timer.component.html'
})
export class SplitterTimerComponent implements OnInit {
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  // @Input() size: string = '1';
  private totalSeconds: number = 0;

  ngOnInit() {
    this.updateDisplay();
  }

  incrementSecond() {
    this.totalSeconds++;
    this.updateDisplay();
  }

  private updateDisplay() {
    const hours = Math.floor((this.totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((this.totalSeconds % (60 * 60)) / 60);
    const seconds = this.totalSeconds % 60;

    this.hours = hours.toString().padStart(2, '0');
    this.minutes = minutes.toString().padStart(2, '0');
    this.seconds = seconds.toString().padStart(2, '0');
  }
}

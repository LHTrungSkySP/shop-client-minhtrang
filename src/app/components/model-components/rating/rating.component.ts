import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lht-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  _value = 0;
  @Input() set value(v: number) {
    this._value = v;
    this.value_check = Array(v);
    this.value_wait = Array(this.MAX_VALUE - v);
  }
  @Output() valueChange = new EventEmitter<number>();
  MAX_VALUE = 5;

  value_check: any[] = [];
  value_wait: any[] = [];
}

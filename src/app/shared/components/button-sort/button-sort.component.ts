import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lht-button-sort',
  templateUrl: './button-sort.component.html',
  styleUrl: './button-sort.component.scss'
})
export class ButtonSortComponent {
  TOGGLE_STATUSES = {
    NULL: null,
    UP: 'up',
    DOWN: 'down'
  }
  @Input() label: string = '';
  @Input() toggle: string | null = this.TOGGLE_STATUSES.NULL;
  @Output() toggleChange = new EventEmitter<string|null>();

  changeToggleSelected(){
    this.toggle = this.getNextToggleStatus(this.toggle);
    this.toggleChange.emit(this.toggle);
  }

  getNextToggleStatus(toggleStatus: string | null){
    switch(toggleStatus){
      case this.TOGGLE_STATUSES.NULL:
        return this.TOGGLE_STATUSES.UP;
      case this.TOGGLE_STATUSES.UP:
        return this.TOGGLE_STATUSES.DOWN;
      case this.TOGGLE_STATUSES.DOWN:
        return this.TOGGLE_STATUSES.NULL;
      default:
        console.error('Value is invalid: ', toggleStatus);
        return '';
    }
  }
}

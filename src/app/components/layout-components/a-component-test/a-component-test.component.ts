import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lht-a-component-test',
  templateUrl: './a-component-test.component.html',
  styleUrl: './a-component-test.component.scss'
})
export class AComponentTestComponent {
  _input!: string;
  @Input() set input(data: any) {
    this._input = data;
    console.log('set input: ', data);
  }
  get input(){
    console.log('get input: ', this._input);
    return this._input;
  }

  _input2!: string;
  @Input() set input2(data: any) {
    this._input2 = data;
    console.log('set input2: ', data);
  }
  get input2(){
    console.log('get input2: ', this._input2);
    return this._input2;
  }

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges');
  }

  ngDoCheck() {
    console.log('do check');
  }

  ngOnInit() {
    console.log('init');
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

  ngAfterViewChecked() {
    console.log('after view checked');
  }

  ngAfterContentInit() {
    console.log('after content init');
  }

  ngAfterContentChecked() {
    console.log('after content checked');
  }
}

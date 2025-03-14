import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownDoughnutComponent } from './shared/components/countdown-doughnut/countdown-doughnut.component';
import { SplitterTimerComponent } from './shared/components/splitter-timer/splitter-timer.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
}

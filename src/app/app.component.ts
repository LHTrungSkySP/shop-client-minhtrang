import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  data = 0;
  data2 = 0;
  ngOnInit(): void {
    this.data = 5;
    this.data2 = 15;
  }
  toggleCountDown(){
    this.active = !this.active;
  }
  active = false;
}

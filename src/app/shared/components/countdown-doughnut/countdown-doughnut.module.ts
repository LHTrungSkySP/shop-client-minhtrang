import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownDoughnutComponent } from './countdown-doughnut.component';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [
    CountdownDoughnutComponent
  ],
  imports: [
    CommonModule,
    ChartModule
  ],
  exports: [
    CountdownDoughnutComponent
  ]
})
export class CountdownDoughnutModule { }

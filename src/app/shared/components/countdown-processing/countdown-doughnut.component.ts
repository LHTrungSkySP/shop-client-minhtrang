import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'lht-countdown-doughnut',
  templateUrl: './countdown-doughnut.component.html',
  styleUrl: './countdown-doughnut.component.scss'
})
export class CountdownDoughnutComponent implements OnInit, OnDestroy {
  //#region field
  @ViewChild('countdownCanvas') countdownCanvas!: ElementRef<HTMLCanvasElement>;
  myChart!: Chart<"doughnut">;
  /**
   * start countDown - second
   */
  @Input() processedTime = 0;
  /**
   * end countDown
   */
  @Input() endCount = 60;
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
  /**
   * size of height + width
   */
  @Input() size: Size = {
    value: 200,
    unit: 'px'
  }
  @Input() cutout = 75;
  title = '0%';

  @Input() bgCountColor = 'green';
  @Input() bgCompleteColor = '#dfe7ef';

  interval_Mng: any = null;
  //#endregion

  constructor() {
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend, ChartDataLabels);
  }
  ngOnInit(): void {
    if (!this.active) {
      this.title = Math.floor((this.processedTime * 100 / this.endCount)) + '%';
    }
  }

  ngOnDestroy(): void {
    this.stop();
  }
  ngAfterViewInit(): void {
    this.initChart();
    if (this.active) {
      this.start();
    }
    this.isFirst = false;
  }
  toggleCount() {
    this.active ? this.start() : this.stop();
  }

  initChart(): void {
    let ctx = this.countdownCanvas?.nativeElement.getContext('2d');
    if (!ctx) return;
    this.myChart = new Chart(ctx, {
      type: 'doughnut',
      data: this.initChartData(),
      options: this.initChartOptions()
    });
  }
  initChartData() {
    return {
      datasets: [
        {
          data: [this.endCount, this.processedTime],
          backgroundColor: [this.bgCompleteColor, this.bgCountColor],
          borderColor: [this.bgCompleteColor, this.bgCountColor]
        },
      ],
    }
  }
  initChartOptions() {
    return {
      // animation: false,
      cutout: this.cutout,
      responsive: true,
      plugins: {
        datalabels: {
          display: false,
        },
      },
    }
  }

  updateChart(counter: number): void {
    if (this.myChart) {
      this.myChart.data.datasets[0].data = [this.endCount - counter, counter];
      this.title = Math.floor((counter * 100 / this.endCount)) + '%';
      this.myChart.update();
    }
  }
  stop() {
    if (this.interval_Mng) {
      clearInterval(this.interval_Mng); // Dọn dẹp interval khi component bị hủy
    }
  }
  start() {
    if(this.isComplete) return;
    this.interval_Mng = setInterval(() => {
      this.processedTime++;
      if (this.processedTime === this.endCount) {
        this.complete();
      }
      this.updateChart(this.processedTime);
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
}
interface Size {
  value: number,
  unit: string
}

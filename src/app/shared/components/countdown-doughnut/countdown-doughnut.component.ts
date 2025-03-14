import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';



@Component({
  selector: 'lht-countdown-doughnut',
  templateUrl: './countdown-doughnut.component.html',
  styleUrls: ['./countdown-doughnut.component.scss']
})
export class CountdownDoughnutComponent implements OnInit {
  //#region field
  @ViewChild('countdownCanvas') countdownCanvas!: ElementRef<HTMLCanvasElement>;
  myChart!: Chart<"doughnut">;
  /**
   * start clockwise - boolean
   */
  @Input() titleClass: string = '';
  /**
   * start clockwise - boolean
   */
  @Input() clockwise: boolean = true;
  /**
   * show Title
   */
  @Input() showTitle: boolean = true;
  /**
   * start countDown - second
   */
  @Input() startCount: number = 0;
  /**
   * end countDown
   */
  @Input() endCount: number = 0;

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
  @Input() bgColor = '#dfe7ef';

  @Input() bgCount: any = ''; // green-700
  @Input() bg: any = ''; // gray-200

  //#endregion
  constructor() {
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend, ChartDataLabels);
  }


  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.initChart();
    this.onUpdateUI(this.startCount, this.endCount);
    console.log("ngAfterViewInit");
  }

  initChart(): void {
    let ctx = this.countdownCanvas?.nativeElement.getContext('2d');
    if (!ctx) return;
    this.myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: this.getDataOfDatasets(),
            backgroundColor: this.getBackgroundColor(),
            borderColor: this.getBorderColor()
          },
        ],
      },
      options: this.initChartOptions()
    });
  }
  initChartOptions() {
    return {
      // animation: false,
      cutout: `${this.cutout}%`,
      responsive: true,
      plugins: {
        datalabels: {
          display: false,
        },
        tooltip: {
          enabled: false, // Vô hiệu hóa tooltip
        }
      }
    }
  }
  @Output() onComplete = new EventEmitter();
  onReset() {
    this.startCount = 0;
    this.endCount = 0;
    this.onUpdateUI(this.startCount, this.endCount);
  }

  onUpdateUI(startCount: number, endCount: number) {
    this.endCount = endCount;
    this.startCount = startCount;
    if (this.isOverload()) {
      this.startCount = this.endCount;
    }
    this.myChart.data.datasets[0].backgroundColor = this.getBackgroundColor();
    this.myChart.data.datasets[0].borderColor = this.getBorderColor();
    this.myChart.data.datasets[0].data = this.getDataOfDatasets();
    if (this.startCount === 0) {
      this.title = '0%';
    } else if (this.startCount >= this.endCount) {
      this.title = '100%';
    } else {
      this.title = Math.floor((this.startCount * 100 / this.endCount)) + '%';
    }
    // this.title = this.startCount === 0 ? '0%' : Math.floor((this.startCount * 100 / this.endCount)) + '%';
    this.myChart.update();
  }
  onUpdateBgColor(bgCountColor: string) {
    this.bgCountColor = bgCountColor;
    this.myChart.data.datasets[0].backgroundColor = this.getBackgroundColor();
    this.myChart.data.datasets[0].borderColor = this.getBorderColor();
    this.myChart.update();
  }
  getDataOfDatasets() {
    return !this.clockwise ? [this.startCount, this.endCount - this.startCount] : [this.endCount - this.startCount, this.startCount];
  }
  getBackgroundColor() {
    return !this.clockwise ? [this.bgCountColor, this.bgColor] : [this.bgColor, this.bgCountColor];
  }
  getBorderColor() {
    return !this.clockwise ? [this.bgCountColor, this.bgColor] : [this.bgColor, this.bgCountColor];
  }
  isOverload() {
    return this.startCount >= this.endCount && this.startCount !== 0 && this.endCount !== 0;
  }
}
interface Size {
  value: number,
  unit: string
}

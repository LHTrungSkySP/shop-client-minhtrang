import { Component, Input } from '@angular/core';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'lht-countdown-doughnut',
  template: `<div style="width: 500px;height: 500px"><canvas id="countdown" width="10" height="10"></canvas></div>`,
  styleUrl: './countdown-doughnut.component.scss'
})
export class CountdownDoughnutComponent {
  myChart!: any;
  @Input() counter = 0;
  @Input() maxValue = 60;
  constructor() {
    // Register necessary elements and controllers
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend, ChartDataLabels);
  }
  ngAfterViewInit(): void {
    this.drawPieChart(this.maxValue, this.maxValue);

    setInterval(() => {
      this.counter = (this.counter + 1) % (this.maxValue + 1); // Reset counter after reaching maxValue
      this.updateChart(this.counter);
    }, 1000);
  }

  drawPieChart(value: number, maxValue: number): void {
    const ctx = (document.getElementById('countdown') as HTMLCanvasElement).getContext('2d');
    if (!ctx) return;

    this.myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [value, maxValue - value],
            backgroundColor: ['green', 'red'],
          },
        ],
      },
      // cutoutPercentage: 40,
      options: {
        cutout: 200,
        responsive: true,
        plugins: {
          tooltip: {
            enabled: false,
          },
          datalabels: {
            display: (context: any) => {
              const dataset = context.dataset;
              const value = dataset.data[context.dataIndex];
              return value > 0;
            },
            color: 'white',
          },
        },
      },
    });
  }

  updateChart(counter: number): void {
    if (this.myChart) {
      this.myChart.data.datasets[0].data = [this.maxValue - counter, counter];
      this.myChart.update();
    }
  }
}

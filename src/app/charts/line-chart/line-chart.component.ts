import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data:[32, 13, 46, 23, 38, 56], label: 'Sentiment Analysis' },
  { data:[12, 18, 26, 13, 28, 26], label: 'Image Recognition' },
  { data:[52, 34, 49, 53, 68, 66], label: 'Forecasting' }
];

const LINE_CHART_LABELS: string[] = ['JAN', 'FEB', 'MAR', 'APR', 'JUN', 'JUL'];


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartLegend: true;
  lineChartType =  'line';
  lineChartColors = LINE_CHART_COLORS;


  constructor() { }

  ngOnInit() {
  }

}

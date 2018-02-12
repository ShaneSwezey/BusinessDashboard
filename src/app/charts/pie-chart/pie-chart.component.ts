import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  pieChartData: number[] = [350,450,120];
  pieChartLabels: string[] = ['XYZ Logisitics','Main St Bakery','Acme Hosting'];
  colors: any[] = [
    {
      backgroundColor: ['#26547c','#ff6b6b','#ffd166']
    }
  ];
  pieChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}

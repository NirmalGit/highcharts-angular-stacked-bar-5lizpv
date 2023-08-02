import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HighchartsService } from './highcharts.service.ts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  projectData: any[] = [];

  @ViewChild('charts') public chartEl: ElementRef;
  constructor(private highcharts: HighchartsService) {}
  ngOnInit() {
    this.highcharts.createChart(this.chartEl.nativeElement, this.myOptions);

    const data = [
      {
        devId: 1,
        firstName: 'Ram',
        lastName: null,
        projId: 1,
        projName: 'Project A',
        days: 10,
      },
      {
        devId: 1,
        firstName: 'Ram',
        lastName: null,
        projId: 2,
        projName: 'Project B',
        days: 20,
      },
      {
        devId: 2,
        firstName: 'Nirmal',
        lastName: null,
        projId: 1,
        projName: 'Project A',
        days: 30,
      },
      {
        devId: 2,
        firstName: 'Nirmal',
        lastName: null,
        projId: 3,
        projName: 'Project C',
        days: 40,
      },
    ];
    const groupedData = data.reduce((result, current) => {
      const existing = result.find((item) => item.name === current.projName);
      if (existing) {
        existing.data.push(current.days);
      } else {
        result.push({ name: current.projName, data: [current.days] });
      }
      return result;
    }, []);

    this.projectData = groupedData;
  }
  myOptions = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Stacked bar chart',
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total fruit consumption',
      },
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: 'normal',
      },
    },
    series: this.projectData
    // series: [
    //   {
    //     name: 'John',
    //     data: [5, 3, 4, 7, 2],
    //   },
    //   {
    //     name: 'Jane',
    //     data: [2, 2, 3, 2, 1],
    //   },
    //   {
    //     name: 'Joe',
    //     data: [3, 4, 4, 2, 5],
    //   },
    // ],
  };
}

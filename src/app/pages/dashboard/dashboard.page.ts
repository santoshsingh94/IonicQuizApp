import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../shared/register.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor(
    private router: Router,
    public registerService: RegisterService
  ) {}
  DonughtChart = [];
  ngOnInit() {
    this.DonughtChart = new Chart('myChart', {
      type: 'doughnut',
      data: {
        // labels: ['Blue', 'Green', 'Pink'],
        datasets: [
          {
            label: 'Vote Now',
            data: [48, 52],
            backgroundColor: ['rgba(253, 235, 208 )', 'rgba(227, 92, 41)'],
          },
        ],
      },
      options: {
        cutoutPercentage: 50,
        rotation: 4,
        title: {
          Text: 'Bar Chart',
          display: false,
        },
        elements: {
          arc: {
            borderWidth: 0,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
              display: false,
            },
          ],
        },
      },
    });
  }
}

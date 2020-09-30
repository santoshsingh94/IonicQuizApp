import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../shared/register.service';
import { PopoverController } from '@ionic/angular';
import { Chart } from 'chart.js';

import { PopinfoComponent } from '../popinfo/popinfo.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  percent: number = 48;
  value1: number;
  value2: number;
  intervalId;
  constructor(
    private router: Router,
    public registerService: RegisterService,
    public popoverCtrl: PopoverController
  ) {}
  DonughtChart = [];
  ngOnInit() {
    this.value1 = 52;
    this.value2 = 48;
    this.DonughtChart = new Chart('myChart', {
      type: 'doughnut',
      data: {
        // labels: ['Blue', 'Green', 'Pink'],
        datasets: [
          {
            label: 'Vote Now',
            data: [this.value1, this.value2],
            backgroundColor: ['rgba(253, 235, 208 )', 'rgba(227, 92, 41)'],
          },
        ],
      },
      options: {
        cutoutPercentage: 50,
        rotation: 4,
        title: {
          Text: 'Donught Chart',
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

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: ev,
    });
    await popover.present();
  }
  counter(i: number) {
    return new Array(i);
  }
}

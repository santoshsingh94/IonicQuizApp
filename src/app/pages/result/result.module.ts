import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResultPage } from './result.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

const routes: Routes = [
  {
    path: '',
    component: ResultPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCircleProgressModule.forRoot({
      backgroundPadding: 7,
      radius: 60,
      space: -2,
      outerStrokeWidth: 2,
      outerStrokeColor: '#808080',
      innerStrokeColor: '#e7e8ea',
      innerStrokeWidth: 2,
      // title: '33%',
      titleColor: '#ffffff',
      animateTitle: false,
      animationDuration: 1000,
      showUnits: false,
      clockwise: true,
    }),
  ],
  declarations: [ResultPage],
})
export class ResultPageModule {}

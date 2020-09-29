import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import   {NgCircleProgressModule} from 'ng-circle-progress';

import { CircleprogresComponent } from '../circleprogres/circleprogres.component';

const routes: Routes = [
  {
    path: '',
    component: CircleprogresComponent,
  },
];

@NgModule({
  entryComponents: [CircleprogresComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgCircleProgressModule.forRoot({
      // set defaults here
      "radius": 50,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "0:05",
      "titleColor":"#ffffff",
      "subtitle":"",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false
    
    })
  ],
  declarations: [CircleprogresComponent],
})
export class DashboardPageModule {}

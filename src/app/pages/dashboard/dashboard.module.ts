import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { PopinfoComponent } from '../popinfo/popinfo.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
  },
];

@NgModule({
  entryComponents: [PopinfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DashboardPage, PopinfoComponent],
})
export class DashboardPageModule {}

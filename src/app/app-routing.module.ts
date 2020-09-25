import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    loadChildren: './pages/welcome/welcome.module#WelcomePageModule',
  },
  {
    path: 'mobile-entry',
    loadChildren:
      './pages/mobile-entry/mobile-entry.module#MobileEntryPageModule',
  },
  {
    path: 'verify-mobile/:mobile',
    loadChildren:
      './pages/verify-mobile/verify-mobile.module#VerifyMobilePageModule',
  },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfilePageModule',
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterPageModule',
  },
  {
    path: 'dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule',
  },
  {
    path: 'quiz',
    loadChildren: './pages/quiz/quiz.module#QuizPageModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

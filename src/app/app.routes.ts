import { Routes } from '@angular/router';
import { LoginPpageComponent } from './views/login-ppage/login-ppage.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPpageComponent,
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

import { Routes } from '@angular/router';
import { LoginPpageComponent } from './views/login-ppage/login-ppage.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPpageComponent,
  },{ path: '',   redirectTo: '/login', pathMatch: 'full' }
];

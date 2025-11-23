import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { DashboardCComponent } from '../../components/dashboard/dashboard.component';

@Component({
  selector: 'app-dashboard',
  imports: [MenuComponent, DashboardCComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}

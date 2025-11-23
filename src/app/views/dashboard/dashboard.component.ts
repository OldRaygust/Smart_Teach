import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { DashboardCComponent } from '../../components/dashboard/dashboard.component';
import { UsuarioMenuComponent } from '../../components/usuario-menu/usuario-menu.component';

@Component({
  selector: 'app-dashboard',
  imports: [MenuComponent, DashboardCComponent, UsuarioMenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}

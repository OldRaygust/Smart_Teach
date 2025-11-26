import { MenuComponent } from './../../components/menu/menu.component';
import { Component } from '@angular/core';
import { AvanceComponent } from '../../components/avance/avance.component';
import { UsuarioMenuComponent } from '../../components/usuario-menu/usuario-menu.component';

@Component({
  selector: 'app-avance-asignatura',
  imports: [MenuComponent, AvanceComponent, UsuarioMenuComponent],
  templateUrl: './avance-asignatura.component.html',
  styleUrl: './avance-asignatura.component.scss',
})
export class AvanceAsignaturaComponent {}

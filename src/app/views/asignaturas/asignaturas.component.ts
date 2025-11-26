import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { AsignaturaComponent } from '../../components/asignatura/asignatura.component';
import { RouterOutlet } from '@angular/router';
import { UsuarioMenuComponent } from '../../components/usuario-menu/usuario-menu.component';

@Component({
  selector: 'app-asignaturas',
  imports: [MenuComponent, AsignaturaComponent, UsuarioMenuComponent],
  templateUrl: './asignaturas.component.html',
  styleUrl: './asignaturas.component.scss',
})
export class AsignaturasComponent {}

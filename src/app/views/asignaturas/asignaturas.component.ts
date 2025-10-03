import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { AsignaturaComponent } from '../../components/asignatura/asignatura.component';

@Component({
  selector: 'app-asignaturas',
  imports: [MenuComponent, AsignaturaComponent],
  templateUrl: './asignaturas.component.html',
  styleUrl: './asignaturas.component.scss',
})
export class AsignaturasComponent {}

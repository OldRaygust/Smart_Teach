import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { FormularioEdicionPlanificacionComponent } from '../../components/formulario-edicion-planificacion/formulario-edicion-planificacion.component';
import { UsuarioMenuComponent } from '../../components/usuario-menu/usuario-menu.component';

@Component({
  selector: 'app-formulario',
  imports: [
    MenuComponent,
    FormularioEdicionPlanificacionComponent,
    UsuarioMenuComponent,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {}

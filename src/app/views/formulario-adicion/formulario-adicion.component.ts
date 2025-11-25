import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { UsuarioMenuComponent } from '../../components/usuario-menu/usuario-menu.component';
import { FormularioEdicionComponent } from '../../components/formulario-edicion/formulario-edicion.component';

@Component({
  selector: 'app-formulario-adicion',
  imports: [MenuComponent, UsuarioMenuComponent, FormularioEdicionComponent],
  templateUrl: './formulario-adicion.component.html',
  styleUrl: './formulario-adicion.component.scss',
})
export class FormularioAdicionComponent {}

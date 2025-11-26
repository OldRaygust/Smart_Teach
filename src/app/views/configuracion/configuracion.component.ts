import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { UsuarioMenuComponent } from '../../components/usuario-menu/usuario-menu.component';
import { ConfiguracioDocenteComponent } from '../../components/configuracio-docente/configuracio-docente.component';

@Component({
  selector: 'app-configuracion',
  imports: [MenuComponent, UsuarioMenuComponent, ConfiguracioDocenteComponent],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.scss',
})
export class ConfiguracionComponent {}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RepositorioComponent } from '../../components/repositorio/repositorio.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { UsuarioMenuComponent } from '../../components/usuario-menu/usuario-menu.component';

@Component({
  selector: 'app-material-educativo',
  imports: [
    CommonModule,
    RepositorioComponent,
    MenuComponent,
    UsuarioMenuComponent,
  ],
  templateUrl: './material-educativo.component.html',
  styleUrl: './material-educativo.component.scss',
})
export class MaterialEducativoComponent {}

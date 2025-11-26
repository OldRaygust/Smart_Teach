import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { RepositorioDocenteComponent } from '../../components/repositorio profesor/repositorio.component';
import { UsuarioMenuComponent } from '../../components/usuario-menu/usuario-menu.component';

@Component({
  selector: 'app-rep-doc',
  imports: [MenuComponent,RepositorioDocenteComponent,UsuarioMenuComponent],
  templateUrl: './rep-doc.component.html',
  styleUrl: './rep-doc.component.scss'
})
export class RepDocComponent {

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  imagen = '../../assets/icons/asignatura.png';
  cerrarMenu() {
    console.log('Menú cerrado');
    // Aquí podrías emitir un evento o cambiar un estado para ocultar el menú
  }
}

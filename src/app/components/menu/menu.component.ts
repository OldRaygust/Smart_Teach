import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  constructor(private router: Router) {}

  imagen = '../../assets/icons/asignatura.png';
  cerrarMenu() {
    console.log('Menú cerrado');
    // Aquí podrías emitir un evento o cambiar un estado para ocultar el menú
  }

  dashboardRouting() {
    this.router.navigate(['dashboard']);
  }
  asignaturasRouting() {
    this.router.navigate(['asignaturas']);
  }
  materialRouting() {
    this.router.navigate(['repositorio']);
  }
}

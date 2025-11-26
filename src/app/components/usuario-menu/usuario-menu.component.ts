import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-menu',
  imports: [CommonModule],
  templateUrl: './usuario-menu.component.html',
  styleUrl: './usuario-menu.component.scss',
})
export class UsuarioMenuComponent {
  constructor(private router: Router) {}

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  openConfig(event: Event) {
    event.stopPropagation(); // evita que se cierre al clickear
    this.router.navigate(['/configuracion']);
    console.log('Abrir configuración');
  }

  logout(event: Event) {
    event.stopPropagation();
    this.router.navigate(['/login']);
    console.log('Cerrar sesión');
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-carga-edicion',
  imports: [CommonModule],
  templateUrl: './pantalla-carga-edicion.component.html',
  styleUrl: './pantalla-carga-edicion.component.scss',
})
export class PantallaCargaEdicionComponent {
  loading = true;
  dots = '.';

  constructor(private router: Router) {
    this.animateDots();

    // Tiempo simulado de carga (2s)
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/dashboard']); // <-- Cambia esta ruta
    }, 2000);
  }

  animateDots() {
    let count = 1;

    setInterval(() => {
      count = (count % 3) + 1;
      this.dots = '.'.repeat(count);
    }, 400); // velocidad de animación
  }
}

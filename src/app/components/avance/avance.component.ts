import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-avance',
  imports: [CommonModule],
  templateUrl: './avance.component.html',
  styleUrl: './avance.component.scss',
})
export class AvanceComponent {
  clases = [
    {
      numero: 1,
      tema: 'Suma',
      completado: true,
      material: 'A',
      actividad: 'B',
      accion: '/assets/icons/editar.png',
    },
    {
      numero: 2,
      tema: 'Resta',
      completado: false,
      material: 'A',
      actividad: 'B',
      accion: '/assets/icons/añadir.png',
    },
    {
      numero: 3,
      tema: 'Multiplicación',
      completado: true,
      material: 'A',
      actividad: 'B',
      accion: '/assets/icons/añadir.png',
    },
    {
      numero: 4,
      tema: 'División',
      completado: false,
      material: 'A',
      actividad: 'B',
      accion: '/assets/icons/añadir.png',
    },
  ];
}

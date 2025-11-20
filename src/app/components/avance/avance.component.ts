import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-avance',
  imports: [CommonModule],
  templateUrl: './avance.component.html',
  styleUrl: './avance.component.scss'
})
export class AvanceComponent {

  clases = [
    { numero: 1, tema: 'Suma', completado: true },
    { numero: 2, tema: 'Resta', completado: false },
    { numero: 3, tema: 'Multiplicación', completado: true },
    { numero: 4, tema: 'División', completado: false }
  ];

}

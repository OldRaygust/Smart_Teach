import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-profesores',
  imports: [],
  templateUrl: './cards-profesores.component.html',
  styleUrl: './cards-profesores.component.scss',
})
export class CardsProfesoresComponent {
  @Input() resumen: any;
}

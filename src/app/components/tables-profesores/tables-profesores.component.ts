import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tables-profesores',
  imports: [CommonModule],
  templateUrl: './tables-profesores.component.html',
  styleUrl: './tables-profesores.component.scss',
})
export class TablesProfesoresComponent {
  @Input() planificaciones: any[] = [];
}

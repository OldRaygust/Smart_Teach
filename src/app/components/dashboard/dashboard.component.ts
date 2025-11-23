import { Component } from '@angular/core';
import { CardsProfesoresComponent } from '../cards-profesores/cards-profesores.component';
import { TablesProfesoresComponent } from '../tables-profesores/tables-profesores.component';

@Component({
  selector: 'app-cdashboard',
  imports: [CardsProfesoresComponent, TablesProfesoresComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardCComponent {
  resumen = {
    planificacionesPendientes: 3,
    clasesHoy: 2,
    recursosNuevos: 4,
    avanceCurricular: '75%',
  };

  planificaciones = [
    {
      asignatura: 'Lenguaje',
      unidad: 'Comprensión Lectora',
      fecha: '2025-06-01',
      estado: 'Borrador',
    },
    {
      asignatura: 'Matemáticas',
      unidad: 'Fracciones',
      fecha: '2025-06-03',
      estado: 'Publicado',
    },
    {
      asignatura: 'Historia',
      unidad: 'Chile contemporáneo',
      fecha: '2025-06-05',
      estado: 'Pendiente',
    },
  ];
}

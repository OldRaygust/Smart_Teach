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
    planificacionesPendientes: 1,
    clasesHoy: 2,
    avanceCurricular: '75%',
  };

  planificaciones = [
    {
      asignatura: 'Lenguaje y Comunicación',
      curso: '1º Basico A',
      unidad: 'Comprensión de textos orales y lectura inicial',
      semestre: '1',
      ano: '2025',
      estado: 'Sin iniciar',
    },
    {
      asignatura: 'Lenguaje y Comunicación',
      curso: '1º Basico B',
      unidad: 'Comprensión de textos orales y lectura inicial',
      semestre: '1',
      ano: '2025',
      estado: 'Al dia',
    },
    {
      asignatura: 'Lenguaje y Comunicación',
      curso: '3º Basico A',
      unidad: 'Comprensión lectora de textos narrativos y no literarios',
      semestre: '1',
      ano: '2025',
      estado: 'Atrasado',
    },
    {
      asignatura: 'Lenguaje y Comunicación',
      curso: '3º Basico A',
      unidad: 'Comprensión lectora de textos narrativos y no literarios',
      semestre: '1',
      ano: '2024',
      estado: 'Completado',
    },
  ];
}

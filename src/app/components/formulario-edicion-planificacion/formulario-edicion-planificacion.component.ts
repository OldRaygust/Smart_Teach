import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

interface Seccion {
  id: number;
  titulo: string;
  descripcion: string;
  sugerencias: string[];
  expandido: boolean;
  control: string;
}
@Component({
  selector: 'app-formulario-edicion-planificacion',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-edicion-planificacion.component.html',
  styleUrl: './formulario-edicion-planificacion.component.scss',
})
export class FormularioEdicionPlanificacionComponent {
  form: FormGroup;

  secciones: Seccion[] = [
    {
      id: 1,
      titulo: 'Apertura (5–10 min)',
      descripcion: 'Activar conocimientos previos y motivar.',
      sugerencias: [
        'Preguntas generadoras',
        'Presentación del propósito',
        'Actividad breve de calentamiento',
      ],
      expandido: false,
      control: 'apertura',
    },
    {
      id: 2,
      titulo: 'Desarrollo (25–40 min)',
      descripcion: 'Construcción del aprendizaje.',
      sugerencias: [
        'Explicación del tema central',
        'Lectura guiada o análisis de texto',
        'Trabajo grupal o por parejas',
      ],
      expandido: false,
      control: 'desarrollo',
    },
    {
      id: 3,
      titulo: 'Práctica (10–20 min)',
      descripcion: 'Aplicación de lo aprendido.',
      sugerencias: [
        'Ejercicios individuales',
        'Producción escrita corta',
        'Resolución de actividades',
      ],
      expandido: false,
      control: 'practica',
    },
    {
      id: 4,
      titulo: 'Cierre (5–10 min)',
      descripcion: 'Revisión y evaluación.',
      sugerencias: [
        'Síntesis final',
        'Preguntas de reflexión',
        'Mini evaluación',
      ],
      expandido: false,
      control: 'cierre',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      apertura: [''],
      desarrollo: [''],
      practica: [''],
      cierre: [''],
    });
  }
}

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
  texto: string;
}
@Component({
  selector: 'app-formulario-edicion-planificacion',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-edicion-planificacion.component.html',
  styleUrl: './formulario-edicion-planificacion.component.scss',
})
export class FormularioEdicionPlanificacionComponent {
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      apertura: [''],
      desarrollo: [''],
      practica: [''],
      cierre: [''],
    });
  }

  form!: FormGroup;

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
      texto:
        'Observar la portada de un cuento e identificar qué creen que tratará. Preguntar: “¿Para qué sirven los cuentos? ¿Quién los escribe?” Presentar el propósito de la clase: comprender que los textos comunican un mensaje.',
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
      texto:
        'Lectura en voz alta de un cuento breve ilustrado, destacando el título y el autor. Conversación guiada sobre el mensaje del texto y qué quiere transmitir el autor. Mostrar diferentes tipos de textos (cuento, cartel, tarjeta) y comparar sus propósitos.',
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
      texto:
        'Entregar a los estudiantes imágenes de distintos textos y pedir que identifiquen cuál podría ser su propósito. Actividad de marcar con un círculo el título y el autor en una hoja con un mini cuento. Trabajo por parejas: comentar qué mensaje transmite el cuento leído.',
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
      texto:
        'Preguntar: “¿Qué aprendimos hoy sobre los textos?”. Pedir que cada estudiante diga para qué creen que sirve un cuento.Mini evaluación oral: mencionar el título y el autor del cuento leído.',
    },
  ];

  actualizar(control: string, event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    this.form.patchValue({ [control]: value });
  }
  guardarPlanificacion() {}
  descargarPlanificacion() {}
  descartarPlanificacion() {}
}

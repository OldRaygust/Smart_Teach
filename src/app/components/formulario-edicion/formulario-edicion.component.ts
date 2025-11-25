import { CommonModule } from '@angular/common';
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
  selector: 'app-formulario-edicion',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-edicion.component.html',
  styleUrl: './formulario-edicion.component.scss',
})
export class FormularioEdicionComponent {
  cargando = true;

  ngOnInit() {
    // Simula el tiempo de carga de contenido
    setTimeout(() => {
      this.cargando = false;
    }, 1800); // 1.8 segundos (puedes cambiarlo)
  }
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
      descripcion: 'Activar conocimientos previos sobre sílabas y sonidos.',
      sugerencias: [
        'Juego oral rápido de identificar sílabas',
        'Presentación del propósito de la clase',
        'Mostrar imágenes y preguntar cuántas sílabas tienen',
      ],
      expandido: false,
      control: 'apertura',
      texto:
        'Presentar imágenes de objetos familiares (sol, mesa, pelota) y pedir a los estudiantes que digan cuántas sílabas creen que tienen. Explicar brevemente que trabajarán la idea de separar palabras en partes llamadas sílabas.',
    },
    {
      id: 2,
      titulo: 'Desarrollo (25–40 min)',
      descripcion: 'Comprender y manipular sílabas y fonemas.',
      sugerencias: [
        'Separación de palabras en sílabas',
        'Uso de tarjetas o palmas para marcar sílabas',
        'Identificación de sonidos iniciales y finales',
      ],
      expandido: false,
      control: 'desarrollo',
      texto:
        'Usar tarjetas de palabras simples (casa, pato, mesa). Pedir a los estudiantes que separen en sílabas utilizando palmas o bloques. Luego, jugar a identificar el sonido inicial de cada palabra. Formar nuevas palabras combinando sílabas sueltas entregadas en tarjetas.',
    },
    {
      id: 3,
      titulo: 'Práctica (10–20 min)',
      descripcion: 'Aplicación práctica con materiales manipulativos.',
      sugerencias: [
        'Clasificación de palabras según número de sílabas',
        'Formación de nuevas palabras combinando tarjetas',
        'Juego de sonidos iniciales',
      ],
      expandido: false,
      control: 'practica',
      texto:
        'Entregar tarjetas con sílabas (pa, me, to, sa, la) y pedir que formen palabras posibles. Luego entregar imágenes y pedir que identifiquen la cantidad de sílabas y sonido inicial. Trabajo en parejas combinando sílabas para crear palabras reales o inventadas.',
    },
    {
      id: 4,
      titulo: 'Cierre (5–10 min)',
      descripcion: 'Reflexión y comprobación del aprendizaje.',
      sugerencias: [
        'Revisión oral de lo aprendido',
        'Síntesis final de la clase',
        'Mini evaluación con ejemplos',
      ],
      expandido: false,
      control: 'cierre',
      texto:
        'Pedir a los estudiantes que digan una palabra y separarla juntos en sílabas. Preguntar: “¿Qué es una sílaba? ¿Qué sonido comienza esta palabra?”. Mini evaluación con tres palabras simples para que identifiquen sílabas y sonido inicial.',
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

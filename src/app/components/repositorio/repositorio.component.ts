import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface RecursoEducativo {
  id: number;
  titulo: string;
  tipo: string;
  fecha: string;
  descripcion: string;
  contenido: string;
}

@Component({
  selector: 'app-repositorio',
  imports: [CommonModule],
  templateUrl: './repositorio.component.html',
  styleUrl: './repositorio.component.scss',
})
export class RepositorioComponent {
  seleccionado: RecursoEducativo | null = null;

  recursos: RecursoEducativo[] = [
    {
      id: 1,
      titulo: 'Planificación de Lenguaje - Texto Narrativo',
      tipo: 'Planificación',
      fecha: '2025-03-10',
      descripcion: 'Estructura completa de una clase sobre texto narrativo.',
      contenido: 'Apertura...\nDesarrollo...\nPráctica...\nCierre...',
    },
    {
      id: 2,
      titulo: 'Guía Didáctica - Comprensión Lectora',
      tipo: 'Guía',
      fecha: '2025-03-12',
      descripcion: 'Actividades de comprensión lectora para nivel básico.',
      contenido: 'Actividad 1...\nActividad 2...\nLectura guiada...',
    },
    {
      id: 3,
      titulo: 'Evaluación Corta - Figuras Literarias',
      tipo: 'Evaluación',
      fecha: '2025-03-15',
      descripcion:
        'Mini evaluación formativa sobre metáfora, símil y personificación.',
      contenido: 'Pregunta 1...\nPregunta 2...\nPregunta 3...',
    },
  ];

  verRecurso(recurso: RecursoEducativo) {
    this.seleccionado = recurso;
  }

  cerrarVista() {
    this.seleccionado = null;
  }

  descargar(recurso: RecursoEducativo) {
    alert('Simulación de descarga: ' + recurso.titulo);
  }

  eliminar(id: number) {
    this.recursos = this.recursos.filter((r) => r.id !== id);
    if (this.seleccionado?.id === id) this.seleccionado = null;
  }
}

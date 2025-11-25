import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import { PopUpComponent } from '../pop-up/pop-up.component';

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
  imports: [CommonModule, PopUpComponent],
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
    const pdf = new jsPDF();

    pdf.setFontSize(16);
    pdf.text(recurso.titulo, 10, 10);

    pdf.setFontSize(12);
    pdf.text('Descripción:', 10, 20);
    pdf.text(recurso.descripcion || 'Sin descripción', 10, 28);

    pdf.text('Contenido:', 10, 40);
    pdf.text(recurso.contenido || 'Contenido no disponible', 10, 48);

    pdf.save(recurso.titulo + '.pdf');
  }

  eliminar(id: number) {
    this.recursos = this.recursos.filter((r) => r.id !== id);
    if (this.seleccionado?.id === id) this.seleccionado = null;
  }

  modalAbierto = false;

  abrirModal() {
    this.modalAbierto = true;
  }
}

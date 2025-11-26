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
  selector: 'app-repositorio-docente',
  imports: [CommonModule, PopUpComponent],
  templateUrl: './repositorio.component.html',
  styleUrl: './repositorio.component.scss',
})
export class RepositorioDocenteComponent {
  seleccionado: RecursoEducativo | null = null;

  recursos: RecursoEducativo[] = [
    {
      id: 1,
      titulo: 'Currículo Nacional - Ministerio de educación',
      tipo: 'Formativo',
      fecha: '2025-03-10',
      descripcion: 'Currículo Nacional entregado por Mineduc.',
      contenido: 'Apertura...\nDesarrollo...\nPráctica...\nCierre...',
    },
    {
      id: 2,
      titulo: 'Currículo Escolar - Colegio X',
      tipo: 'Formativo',
      fecha: '2025-03-12',
      descripcion: 'Currículo de la escuela, contiene estructuras de clases...',
      contenido: 'Actividad 1...\nActividad 2...\nLectura guiada...',
    },
    {
      id: 3,
      titulo: 'Normas del colegio - Colegio X',
      tipo: 'Reglamentario',
      fecha: '2025-03-12',
      descripcion: 'Normas sobre el actuar del alumnado, docentes y directivos. contiene planes de respuesta, flujos de comunicación...',
      contenido: 'Actividad 1...\nActividad 2...\nLectura guiada...',
    },
    {
      id: 4,
      titulo: 'Guía de uso adecuado de IA Generativa - Colegio X',
      tipo: 'Formativo',
      fecha: '2025-03-15',
      descripcion: 'Material para el uso adecuado de la plataforma y como sacar el máximo de esta.',
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

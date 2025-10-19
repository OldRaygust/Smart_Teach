import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
interface Experience {
  titulo: string;
  empleador: string;
  ciudad: string;
  inicio: string;
  fin: string;
  descripcion: string;
}

@Component({
  selector: 'app-formulario-edicion-planificacion',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario-edicion-planificacion.component.html',
  styleUrl: './formulario-edicion-planificacion.component.scss',
})
export class FormularioEdicionPlanificacionComponent {
  experiences: Experience[] = [];

  newExperience: Experience = {
    titulo: '',
    empleador: '',
    ciudad: '',
    inicio: '',
    fin: '',
    descripcion: '',
  };

  addExperience() {
    this.experiences.push({ ...this.newExperience });
    this.newExperience = {
      titulo: '',
      empleador: '',
      ciudad: '',
      inicio: '',
      fin: '',
      descripcion: '',
    };
  }
}

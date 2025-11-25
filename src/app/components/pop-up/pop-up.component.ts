import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pop-up',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss',
})
export class PopUpComponent {
  @Output() cerrarModal = new EventEmitter<void>();

  form: FormGroup;

  asignaturas = ['Lenguaje'];
  unidades = ['Unidad 1', 'Unidad 2', 'Unidad 3', 'Unidad 4'];
  clases = ['1', '2', '3', '4'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      asignatura: [''],
      unidad: [''],
      clase: [''],
      cantidadPreguntas: [5],
      tipoEvaluacion: [''],
      tipoPreguntas: [''],
    });
  }

  cerrar() {
    this.cerrarModal.emit();
  }

  generar() {
    console.log('Formulario:', this.form.value);
    alert('Material generado (simulación)');
  }
}

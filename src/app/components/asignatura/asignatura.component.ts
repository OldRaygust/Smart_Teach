import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Asignatura {
  nombre: string;
  curso: string;
  descripcion: string;
  imagen?: string;
}

@Component({
  selector: 'app-asignatura',
  imports: [CommonModule],
  templateUrl: './asignatura.component.html',
  styleUrl: './asignatura.component.scss',
})
export class AsignaturaComponent implements OnInit {
  asignaturas: Asignatura[] = [];

  ngOnInit(): void {
    this.asignaturas = [
      //Aqui se podra hacer que sea dinamico.
      {
        nombre: 'Matemáticas',
        curso: '1° Medio',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imagen: '',
      },
      {
        nombre: 'Historia',
        curso: '2° Medio',
        descripcion: 'Suspendisse id lorem in mi fermentum porta.',
        imagen: '',
      },
      {
        nombre: 'Lenguaje',
        curso: '3° Medio',
        descripcion: 'Nulla facilisi. Donec vel nisl a justo.',
        imagen: '',
      },
    ];
  }
  definirPlanificacion(asignatura: Asignatura) {
    console.log('Definir planificación para:', asignatura);
    // Aquí puedes navegar a otra ruta o abrir un modal
  }
}

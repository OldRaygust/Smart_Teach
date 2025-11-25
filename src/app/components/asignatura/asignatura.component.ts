import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}

  asignaturas: Asignatura[] = [];

  ngOnInit(): void {
    this.asignaturas = [
      //Aqui se podra hacer que sea dinamico.
      {
        nombre: 'Lenguaje y Comunicación',
        curso: '1º Basico A',
        descripcion: 'Estado: Sin iniciar.',
        imagen: '',
      },
      {
        nombre: 'Lenguaje y Comunicación',
        curso: '1º Basico B',
        descripcion: 'Estado: Al dia.',
        imagen: '',
      },
      {
        nombre: 'Lenguaje y Comunicación',
        curso: '3º Basico A',
        descripcion: 'Estado: Atrasado.',
        imagen: '',
      },
      {
        nombre: 'Lenguaje y Comunicación',
        curso: '3º Basico A',
        descripcion: 'Estado: Completado.',
        imagen: '',
      },
    ];
  }
  definirPlanificacion(asignatura: Asignatura) {
    console.log('Definir planificación para:', asignatura);
    this.router.navigate(['avance']);
  }
}

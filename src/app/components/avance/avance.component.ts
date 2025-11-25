import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avance',
  imports: [CommonModule],
  templateUrl: './avance.component.html',
  styleUrl: './avance.component.scss',
})
export class AvanceComponent {
  constructor(private ruter: Router) {}

  unidadActiva = 0;

  cambiarUnidad(index: number) {
    this.unidadActiva = index;
  }

  unidades = [
    {
      numero: '1',
      nombre: 'Unidad 1: Comprensión y disfrute de textos',
      clases: [
        {
          numero: '1',
          tema: 'Reconocimiento del texto y su propósito',
          material: 'Cuento familiar ilustrado',
          actividad:
            'Leer en voz alta el cuento y conversar qué mensaje transmite y quién lo escribió',
          accion: '/assets/icons/editar.png',
          ruta: '/formulario',
        },
        {
          numero: '2',
          tema: 'Conciencia fonológica: sílabas y fonemas',
          material: 'Juego de sílabas con tarjetas',
          actividad:
            'Separar palabras en sílabas y combinarlas para formar nuevas con tarjetas',
          accion: '/assets/icons/añadir.png',
          ruta: '/formulario_anadir',
        },
        {
          numero: '3',
          tema: 'Comprensión de narraciones conocidas',
          material: 'Cuento corto con imágenes',
          actividad:
            'Contestar preguntas simples (qué, quién, dónde) sobre el cuento escuchado',
          accion: '/assets/icons/añadir.png',
          ruta: '/formulario',
        },
        {
          numero: '4',
          tema: 'Comprensión emocional y recreación artística',
          material: 'Dibujo + títeres de papel',
          actividad:
            'Dibujar una escena del cuento y recrearla con títeres en grupo',
          accion: '/assets/icons/añadir.png',
          ruta: '/formulario',
        },
      ],
    },

    {
      numero: '2',
      nombre: 'Unidad 2: Expresión oral, escucha activa y vocabulario',
      clases: [
        {
          numero: '1',
          tema: 'Escucha activa y respeto de turnos',
          material: 'Láminas de situaciones escolares',
          actividad:
            'Analizar una situación y verbalizar qué sucede, respetando turnos al opinar',
          accion: '/assets/icons/añadir.png',
          ruta: '/formulario',
        },
        {
          numero: '2',
          tema: 'Vocabulario contextual',
          material: 'Tarjetas de palabras nuevas',
          actividad:
            'Relacionar palabras nuevas con imágenes y usarlas en oraciones cortas',
          accion: '/assets/icons/añadir.png',
          ruta: '/formulario',
        },
        {
          numero: '3',
          tema: 'Descripciones sencillas',
          material: 'Objetos del aula',
          actividad:
            'Escoger un objeto y describir su forma, color y uso en voz alta',
          accion: '/assets/icons/añadir.png',
          ruta: '/formulario',
        },
        {
          numero: '4',
          tema: 'Relatos orales breves',
          material: 'Secuencias de imágenes',
          actividad:
            'Ordenar imágenes y relatar oralmente una historia sencilla con inicio, desarrollo y final',
          accion: '/assets/icons/añadir.png',
          ruta: '/formulario',
        },
      ],
    },

    {
      numero: '3',
      nombre: 'Unidad 3: Lectura inicial y decodificación',
      clases: [
        {
          numero: '1',
          tema: 'Reconocimiento de letras y sonidos',
          material: 'Tarjetas de letras',
          actividad:
            'Identificar letras y emparejar con imágenes cuyo sonido inicial coincida',
          accion: '/assets/icons/añadir.png',
          ruta: '/formulario',
        },
        {
          numero: '2',
          tema: 'Unión de sílabas para formar palabras',
          material: 'Tablero silábico',
          actividad:
            'Formar palabras simples juntando sílabas móviles en un tablero',
          accion: '/assets/icons/añadir.png',
          ruta: '/formulario',
        },
        {
          numero: '3',
          tema: 'Lectura de palabras simples',
          material: 'Mini tarjetas de lectura',
          actividad:
            'Leer palabras CVC (consonante-vocal-consonante) y asociarlas a imágenes',
          accion: '/assets/icons/añadir.png',
          ruta: '/formulario',
        },
        {
          numero: '4',
          tema: 'Lectura de oraciones simples',
          material: 'Tiras con oraciones',
          actividad:
            'Leer oraciones cortas y dibujar lo que entendieron para verificar comprensión',
          accion: '/assets/icons/añadir.png',
          ruta: '/formulario',
        },
      ],
    },
  ];

  enrutamiento(c: string) {
    console.log(c);
    this.ruter.navigate([c]);
  }
}

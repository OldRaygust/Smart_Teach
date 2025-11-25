import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-avance',
  imports: [CommonModule],
  templateUrl: './avance.component.html',
  styleUrl: './avance.component.scss',
})
export class AvanceComponent {
  clases = [
    {
      numero: '1',
      tema: 'Reconocimiento del texto y su propósito',
      completado: false,
      material: 'Cuento familiar ilustrado',
      actividad:
        'Leer en voz alta el cuento y conversar qué mensaje transmite y quién lo escribió',
      accion: '/assets/icons/editar.png',
    },
    {
      numero: '1',
      tema: 'Conciencia fonológica: sílabas y fonemas',
      completado: false,
      material: 'Juego de sílabas con tarjetas',
      actividad:
        'Separar palabras en sílabas y combinarlas para formar nuevas con tarjetas',
      accion: '/assets/icons/añadir.png',
    },
    {
      numero: '1',
      tema: 'Comprensión de narraciones conocidas',
      completado: false,
      material: 'Cuento corto con imágenes',
      actividad:
        'Contestar preguntas simples (qué, quién, dónde) sobre el cuento escuchado',
      accion: '/assets/icons/añadir.png',
    },
    {
      numero: '1',
      tema: 'Comprensión emocional y recreación artística',
      completado: false,
      material: 'Dibujo en papel + títeres de papel',
      actividad:
        'Dibujar una escena del cuento escuchado y recrear personajes con títeres',
      accion: '/assets/icons/añadir.png',
    },
  ];
}

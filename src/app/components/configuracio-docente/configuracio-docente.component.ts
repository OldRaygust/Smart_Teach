import { Component } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-configuracio-docente',
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './configuracio-docente.component.html',
  styleUrl: './configuracio-docente.component.scss',
})
export class ConfiguracioDocenteComponent {
  activeTab: string = 'perfil';

  usuario = {
    nombre: 'Juan Pérez',
    especialidad: 'Profesor de Matemáticas',
    emailPersonal: 'juan.perez@gmail.com',
    emailTrabajo: 'jperez@colegio.cl',
  };
}

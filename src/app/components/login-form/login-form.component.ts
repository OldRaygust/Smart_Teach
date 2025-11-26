import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  constructor(private router: Router) {}
  showFiller = false;

  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly pass = new FormControl('', [Validators.required]);

  errorEmailMessage = signal('');
  errorPassMessage = signal('');
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorEmailMessage.set('Debes ingresar un valor');
    } else if (this.email.hasError('email')) {
      this.errorEmailMessage.set('No es un email valido');
    } else {
      this.errorEmailMessage.set('');
    }

    if (this.pass.hasError('required')) {
      this.errorPassMessage.set('Debes ingresar un valor');
    } else {
      this.errorPassMessage.set('');
    }
  }
  dashboard() {
    this.router.navigate(['dashboard']);
  }
}

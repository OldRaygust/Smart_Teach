import { Routes } from '@angular/router';
import { LoginPpageComponent } from './views/login-ppage/login-ppage.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AsignaturasComponent } from './views/asignaturas/asignaturas.component';
import { FormularioComponent } from './views/formulario/formulario.component';
import { AvanceAsignaturaComponent } from './views/avance-asignatura/avance-asignatura.component';
import { PlaygroundComponent } from './components/playground/playground.component';

export const routes: Routes = [
  { path: 'login', component: LoginPpageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'asignaturas', component: AsignaturasComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'avance', component: AvanceAsignaturaComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'playground', component: PlaygroundComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

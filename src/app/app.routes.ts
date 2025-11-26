import { Routes } from '@angular/router';
import { LoginPpageComponent } from './views/login-ppage/login-ppage.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AsignaturasComponent } from './views/asignaturas/asignaturas.component';
import { FormularioComponent } from './views/formulario/formulario.component';
import { AvanceAsignaturaComponent } from './views/avance-asignatura/avance-asignatura.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { MaterialEducativoComponent } from './views/material-educativo/material-educativo.component';
import { PantallaCargaEdicionComponent } from './components/pantalla-carga-edicion/pantalla-carga-edicion.component';
import { FormularioAdicionComponent } from './views/formulario-adicion/formulario-adicion.component';
import { ConfiguracionComponent } from './views/configuracion/configuracion.component';
import { RepDocComponent } from './views/rep-doc/rep-doc.component';

export const routes: Routes = [
  { path: 'login', component: LoginPpageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'asignaturas', component: AsignaturasComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'repositorio', component: MaterialEducativoComponent },
  { path: 'carga_edicion', component: PantallaCargaEdicionComponent },
  { path:'repositorio-docente',component:RepDocComponent},
  { path: 'formulario_anadir', component: FormularioAdicionComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'avance', component: AvanceAsignaturaComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'playground', component: PlaygroundComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

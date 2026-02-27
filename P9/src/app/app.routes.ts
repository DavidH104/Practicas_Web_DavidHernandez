import { Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos';
import { Formulario } from './components/formulario/formulario';

export const routes: Routes = [
  { path: '', component: AlumnosComponent },
  { path: 'formulario', component: Formulario }
];
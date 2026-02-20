import { Routes } from '@angular/router';
import { Lista } from './components/lista/lista';
import { Formulario } from './components/formulario/formulario';

export const routes: Routes = [
  { path: '', component: Lista },
  { path: 'alumno', component: Formulario }
];
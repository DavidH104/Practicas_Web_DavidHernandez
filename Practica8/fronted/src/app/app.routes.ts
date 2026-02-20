import { Routes } from '@angular/router';
import { Tabla } from './tabla/tabla';

export const routes: Routes = [
  { path: 'eventos', component: Tabla },
  { path: '', redirectTo: 'eventos', pathMatch: 'full' }
];
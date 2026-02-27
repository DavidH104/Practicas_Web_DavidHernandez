import { Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'alumnos',
    pathMatch: 'full'
  },
  {
    path: 'alumnos',
    loadComponent: () =>
      import('./components/alumnos/alumnos')
        .then(m => m.AlumnosComponent)
  }
];
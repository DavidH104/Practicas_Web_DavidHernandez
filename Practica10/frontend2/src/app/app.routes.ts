import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { FormularioComponent } from './components/formulario/formulario';
import { Listado } from './components/listado/listado';
import { Actualizar } from './components/actualizar/actualizar';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'agregar', component: FormularioComponent },
  { path: 'listado', component: Listado },
  { path: 'actualizar', component: Actualizar },
  { path: '**', redirectTo: '' }
];
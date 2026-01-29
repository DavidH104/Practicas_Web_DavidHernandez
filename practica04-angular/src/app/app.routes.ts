import { Routes } from '@angular/router';
// Usamos los nombres cortos como en el PDF
import { Home } from './page/home/home'; 
import { Contact } from './pages/contact/contact';
import { Listado } from './pages/listado/listado';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contacto', component: Contact },
  { path: 'listado', component: Listado }
];
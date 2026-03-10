import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home';

import { FormularioComponent } from './components/formulario/formulario';

import { ListadoComponent } from './components/listado/listado';

import { ActualizarComponent } from './components/actualizar/actualizar';

export const routes:Routes=[

{path:'',component:HomeComponent},

{path:'agregar',component:FormularioComponent},

{path:'eliminar',component:ListadoComponent},

{path:'actualizar',component:ActualizarComponent}

]
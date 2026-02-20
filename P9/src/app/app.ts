import { Component } from '@angular/core';
import { Lista } from './components/lista/lista';
import { Formulario } from './components/formulario/formulario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Lista, Formulario],
  template: `
    <app-formulario></app-formulario>
    <app-lista></app-lista>
  `
})
export class App {}

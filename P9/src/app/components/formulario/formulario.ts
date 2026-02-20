import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlumnoService } from '../../services/alumno';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html'
})
export class Formulario {

  alumno = {
    nombre: '',
    edad: 0,
    carrera: ''
  };

  constructor(private servicio: AlumnoService) {}

  guardar() {
    this.servicio.agregarAlumno(this.alumno).subscribe(() => {
      alert('Alumno guardado');
      this.alumno = { nombre: '', edad: 0, carrera: '' };
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AlumnosService } from '../../services/alumnos';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html'
})
export class FormularioComponent {

  constructor(private alumnoService: AlumnosService) {}

  guardarAlumno(form: NgForm) {

    if (form.invalid) return;

    const nuevoAlumno = {
      nombre: form.value.nombre,
      edad: form.value.edad,
      carrera: form.value.carrera
    };

    this.alumnoService.agregarAlumno(nuevoAlumno).subscribe({
      next: () => {
        alert("Alumno agregado correctamente");
        form.reset();
      },
      error: (err) => {
        console.error("Error:", err);
      }
    });
  }
}
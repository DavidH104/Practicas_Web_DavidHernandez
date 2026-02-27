import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumnos } from '../../services/alumnos';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  constructor(
    private alumnoService: Alumnos,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  guardarAlumno(form: NgForm) {

    if (form.invalid) return;

    const nuevoAlumno = {
      nombre: form.value.nombre,
      edad: form.value.edad,
      carrera: form.value.carrera
    };

    this.alumnoService.agregarAlumno(nuevoAlumno).subscribe({
      next: () => {

        alert("Alumno agregado correctamente ✅");

        form.reset();

        // 🔥 Forzar detección de cambios
        this.cdRef.detectChanges();

        // 🔥 Regresar a la tabla
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error("Error al insertar:", err);
      }
    });
  }
}
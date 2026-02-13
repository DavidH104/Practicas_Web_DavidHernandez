import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  tituloModal = '';
  mensajeModal = '';

  soloLetras(event: any) {
    const valor = event.target.value;
    event.target.value = valor.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
  }

  procesarFormulario(form: NgForm) {

    // Marcar todos los campos como tocados
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();
    });

    if (form.invalid) {
      this.tituloModal = 'Error';
      this.mensajeModal = 'El formulario contiene errores. Verifica los campos.';
    } else {
      this.tituloModal = 'Éxito';
      this.mensajeModal = 'Formulario enviado correctamente.';
      form.resetForm();
    }

    const modal = document.getElementById('modalResultado');
    if (modal) {
      new bootstrap.Modal(modal).show();
    }
  }
}

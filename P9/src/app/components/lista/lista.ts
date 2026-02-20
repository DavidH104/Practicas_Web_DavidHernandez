import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.html'
})
export class Lista implements OnInit {

  alumnos: any[] = [];

  constructor(private servicio: AlumnoService) {}

  ngOnInit(): void {
    this.servicio.obtenerAlumnos().subscribe((data: any) => {
      this.alumnos = data;
    });
  }
}

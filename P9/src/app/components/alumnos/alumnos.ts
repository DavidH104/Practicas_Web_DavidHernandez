import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumnos } from '../../services/alumnos';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css'
})
export class AlumnosComponent implements OnInit {

  listaAlumnos: any[] = [];

  constructor(
    private servicio: Alumnos,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos() {
    this.servicio.obtenerAlumnos().subscribe({
      next: (data: any) => {
        this.listaAlumnos = data;

        // 🔥 Forzamos detección de cambios
        this.cdRef.detectChanges();
      },
      error: (err) => {
        console.error("Error al cargar alumnos:", err);
      }
    });
  }
}
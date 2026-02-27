import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { AlumnosService, Alumno } from '../../services/alumnos';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './alumnos.html',
  styleUrls: ['./alumnos.css']
})
export class AlumnosComponent implements OnInit {

  listaAlumnos: Alumno[] = [];

  constructor(private alumnoService: AlumnosService) {}

ngOnInit(): void {
  this.alumnoService.obtenerAlumnos().subscribe((data) => {
    console.log("DATOS:", data);
    this.listaAlumnos = data;
    console.log("LISTA FINAL:", this.listaAlumnos);
  });
}
}

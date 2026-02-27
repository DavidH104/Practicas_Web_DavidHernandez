import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Alumno {
  nombre: string;
  edad: number;
  carrera: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private API = 'http://127.0.0.1:5000/alumnos';

  constructor(private http: HttpClient) {}

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.API);
  }

  agregarAlumno(alumno: Alumno) {
    return this.http.post(this.API, alumno);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Alumnos {

  private API = 'http://127.0.0.1:5000/alumnos';

  constructor(private http: HttpClient) {}

  obtenerAlumnos() {
    return this.http.get(this.API);
  }

  agregarAlumno(alumno: any) {
    return this.http.post(this.API, alumno);
  }
}
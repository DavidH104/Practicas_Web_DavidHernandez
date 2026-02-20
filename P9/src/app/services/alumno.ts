import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  // ⚠ Debe coincidir EXACTAMENTE con tu endpoint Flask
  private api = 'http://127.0.0.1:5000/alumno';

  constructor(private http: HttpClient) {}

  // 🔹 Obtener todos los alumnos
  obtenerAlumnos(): Observable<any> {
    return this.http.get<any>(this.api);
  }

  // 🔹 Agregar un nuevo alumno
  agregarAlumno(alumno: any): Observable<any> {
    return this.http.post<any>(this.api, alumno);
  }

  // 🔹 Eliminar alumno (opcional si luego lo quieres usar)
  eliminarAlumno(id: string): Observable<any> {
    return this.http.delete<any>(`${this.api}/${id}`);
  }

  // 🔹 Actualizar alumno (opcional para más adelante)
  actualizarAlumno(id: string, alumno: any): Observable<any> {
    return this.http.put<any>(`${this.api}/${id}`, alumno);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h1>Cartelera Cultural</h1>

    <button (click)="cargarEventos()">Carga de Eventos</button>

    <table *ngIf="eventos.length > 0" border="1" cellpadding="5">
      <tr>
        <th>Título</th>
        <th>Fecha</th>
        <th>Lugar</th>
        <th>Precio</th>
      </tr>
      <tr *ngFor="let e of eventos">
        <td>{{ e.titulo }}</td>
        <td>{{ e.fecha }}</td>
        <td>{{ e.lugar }}</td>
        <td>{{ e.precio }}</td>
      </tr>
    </table>

    <p *ngIf="eventos.length === 0">
      No hay eventos cargados
    </p>
  `
})
export class App implements OnInit {

  eventos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarEventos(); // 🔥 carga automática
  }

  cargarEventos(): void {
    this.http.get<any[]>('http://127.0.0.1:5000/eventos')
      .subscribe({
        next: (data) => {
          console.log('EVENTOS RECIBIDOS:', data);
          this.eventos = data;
        },
        error: (err) => {
          console.error('ERROR AL CARGAR EVENTOS:', err);
        }
      });
  }
}

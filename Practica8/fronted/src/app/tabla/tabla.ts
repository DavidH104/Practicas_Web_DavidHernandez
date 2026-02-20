import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h2>Cartelera Cultural</h2>

    <button (click)="cargarEventos()">FORZAR CARGA</button>

    <table border="1" *ngIf="listaEventos.length > 0">
      <tr>
        <th>Título</th>
        <th>Fecha</th>
        <th>Lugar</th>
        <th>Precio</th>
      </tr>

      <tr *ngFor="let evento of listaEventos">
        <td>{{ evento.titulo }}</td>
        <td>{{ evento.fecha }}</td>
        <td>{{ evento.lugar }}</td>
        <td>{{ evento.precio }}</td>
      </tr>
    </table>

    <p *ngIf="listaEventos.length === 0">
      NO HAY EVENTOS
    </p>
  `
})
export class TablaComponent implements OnInit {

  listaEventos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarEventos(); // 🔥 FORZADO AUTOMÁTICO
  }

  cargarEventos(): void {
    this.http.get<any[]>('http://127.0.0.1:5000/eventos')
      .subscribe({
        next: (data) => {
          console.log('EVENTOS FORZADOS:', data);
          this.listaEventos = data;
        },
        error: (err) => {
          console.error('ERROR FORZADO:', err);
        }
      });
  }
}

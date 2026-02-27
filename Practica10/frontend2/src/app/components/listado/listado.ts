import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.html',
  styleUrl: './listado.css'
})
export class Listado implements OnInit {

  games: any[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    console.log("Listado cargado");   // 👈 agrega esto
    this.cargarJuegos();
  }

  cargarJuegos() {
    this.gameService.getGames().subscribe({
      next: (data: any[]) => {
        console.log("DATA:", data);   // 👈 agrega esto
        this.games = data;
      },
      error: (error: any) => {
        console.error("ERROR:", error);
      }
    });
  }

  eliminar(id: string) {
    this.gameService.deleteGame(id).subscribe({
      next: () => {
        this.cargarJuegos();
      }
    });
  }
}
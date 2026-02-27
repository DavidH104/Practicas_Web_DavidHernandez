import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../services/game';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class FormularioComponent {

  game = {
    nombre: '',
    genero: '',
    precio: 0,
    imagenUrl: ''
  };

  constructor(private gameService: GameService) {}

  guardarJuego() {
    this.gameService.createGame(this.game).subscribe({
      next: () => {
        alert("Juego agregado correctamente");
        this.game = { nombre: '', genero: '', precio: 0, imagenUrl: '' };
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}
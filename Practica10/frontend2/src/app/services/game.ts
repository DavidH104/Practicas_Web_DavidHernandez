import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl = 'http://localhost:5000/games';

  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get<any[]>(this.apiUrl);
  }

  createGame(game: any) {
    return this.http.post(this.apiUrl, game);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateGame(id: string, game: any) {
    return this.http.put(`${this.apiUrl}/${id}`, game);
  }
}
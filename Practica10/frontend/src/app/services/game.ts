import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Game {

  apiURL = "http://localhost:5000/games"

  constructor(private http:HttpClient) { }

  getGames():Observable<any>{

    return this.http.get(this.apiURL)

  }

  createGame(game:any):Observable<any>{

    return this.http.post(this.apiURL,game)

  }

  deleteGame(id:string):Observable<any>{

    return this.http.delete(`${this.apiURL}/${id}`)

  }

  updateGame(id:string,game:any):Observable<any>{

    return this.http.put(`${this.apiURL}/${id}`,game)

  }

}
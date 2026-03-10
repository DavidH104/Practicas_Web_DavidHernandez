import { Component,OnInit,ChangeDetectorRef } from '@angular/core';

import { Game } from '../../services/game';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({

selector:'app-actualizar',

standalone:true,

imports:[CommonModule,FormsModule],

templateUrl:'./actualizar.html',

styleUrl:'./actualizar.css'

})

export class ActualizarComponent implements OnInit{

games:any[]=[]

selectedGame:any=null

constructor(

private gameService:Game,

private cd:ChangeDetectorRef

){}

ngOnInit(){

this.loadGames()

}

loadGames(){

this.gameService.getGames().subscribe(data=>{

this.games=data

this.cd.detectChanges()

})

}

selectGame(game:any){

this.selectedGame={...game}

}

updateGame(){

this.gameService.updateGame(this.selectedGame._id,this.selectedGame)
.subscribe(()=>{

alert("Juego actualizado")

this.selectedGame=null

this.loadGames()

})

}

cancelEdit(){

this.selectedGame=null

}

}
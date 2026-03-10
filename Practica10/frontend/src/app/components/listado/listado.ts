import { Component,OnInit,ChangeDetectorRef } from '@angular/core';

import { Game } from '../../services/game';

import { CommonModule } from '@angular/common';

@Component({

selector:'app-listado',

standalone:true,

imports:[CommonModule],

templateUrl:'./listado.html',

styleUrl:'./listado.css'

})

export class ListadoComponent implements OnInit{

games:any[]=[]

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

deleteGame(id:string){

if(confirm("Eliminar juego?")){

this.gameService.deleteGame(id).subscribe(()=>{

alert("Juego eliminado")

this.loadGames()

})

}

}

}
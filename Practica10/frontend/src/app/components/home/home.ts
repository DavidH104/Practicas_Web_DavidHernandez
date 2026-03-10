import { Component,OnInit,ChangeDetectorRef } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Game } from '../../services/game';

@Component({

selector:'app-home',

standalone:true,

imports:[CommonModule],

templateUrl:'./home.html',

styleUrl:'./home.css'

})

export class HomeComponent implements OnInit{

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

}
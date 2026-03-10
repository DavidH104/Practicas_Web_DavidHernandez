import { Component,ChangeDetectorRef } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { Game } from '../../services/game';

@Component({

selector:'app-formulario',

standalone:true,

imports:[CommonModule,FormsModule],

templateUrl:'./formulario.html',

styleUrl:'./formulario.css'

})

export class FormularioComponent{

game={

nombre:'',

genero:'',

precio:0,

imagenUrl:''

}

constructor(

private gameService:Game,

private cd:ChangeDetectorRef

){}

onSubmit(){

this.gameService.createGame(this.game).subscribe({

next:()=>{

alert("Juego agregado")

this.game={

nombre:'',

genero:'',

precio:0,

imagenUrl:''

}

this.cd.detectChanges()

},

error:(error)=>{

console.error(error)

}

})

}

}
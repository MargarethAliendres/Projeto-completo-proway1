import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';    // fui no site componete, escolhi Snck bar, lá tem o passo dos codigos


@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private snackBar: MatSnackBar) { }     // copiei do site e modifiquei a variavel//

  notificar(message: string) {    //copiei do site e modifiquei o nome do metodo e apaguei a action//
    this.snackBar.open(message, "OK",{
        duration: 2000,
        verticalPosition:"top",          //acrescentamos a configuação da duração do snack-bar//
        horizontalPosition:"center"
    } );     // open (abrirá a mensagem) //AQUI NO LUGAR DA ACTION O ok,

  }
}


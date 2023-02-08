import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { produtos } from '../produtos';

@Component({
  selector: 'app-barra-de-pesquisa',
  templateUrl: './barra-de-pesquisa.component.html',
  styleUrls: ['./barra-de-pesquisa.component.css']
})
export class BarraDePesquisaComponent {

    descricao ="";

    constructor(
      private router : Router    //injetar   vamos usar abaixo, para redirecionar essa pagina pesquisa sempre para a pagina produtos//
      ){}

     pesquisar() {
      if (this.descricao){       //quando for digitado algo sera, roteado para a pagina de produtos, selecionando o parametro descricao
        this.router.navigate(['produtos'], {queryParams: {descricao: this.descricao}});
        return;                                 //esse é o parametro que vai abrir na pagina produtos com o produto da descricao digitada//
    }
    //se nao for digitado só retorna para a pagina de produtos
    this.router.navigate(['produtos']);  //aqui nao passei nenhum paramentro
  }
}



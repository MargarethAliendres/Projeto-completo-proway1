import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';



@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: IProduto[] = produtos;    //traz para cá toda a lista de produtos o arquivo que esta detro de produtos.ts que criamos//
                                       //tem acesso direto aos produtos//
  constructor() { }

  //2 metodos abaixo//

  getAll(){      //retorna a lista de produtos//
    return this.produtos;
  }

  //recebe o Id e só vai retornar o produto com o ID informado//
  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id = produtoId);
                        //o find encontra um produto diante de uma condição//
  }                 //vai encontrar um produto onde o produto.id é igual ao id colocado no paramentro do metodo//

  }


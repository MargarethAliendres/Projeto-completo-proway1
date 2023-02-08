import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens:IProdutoCarrinho[] = [];      // vai iniciar vazio//

  constructor() { }

  obtemCarrinho(){       //esse metodo busca todos os itens do ocalStorage//
                                                             // | ""  deixei string vazi o projeto todo, mas no final na implemetação do botao comprar do carrinh tem que vir e trocar para "[]", pois o sason nao consegue fazer o parse de uma string vazia//
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]"); //essa é a chave carrinho//
    return this.itens;
  }//JSON.parse traz objeto  ou seja converte de string para objeto  // esse "" é se o Jason nao achar não achar nada retorna vazio//

                        //esse metodo isere os itens ao carrinho//
    adicionarCarrinho(produto: IProdutoCarrinho){
      this.itens.push(produto);    //esse push vai acrecentar no produto ao carrinho//
      localStorage.setItem("carrinho", JSON.stringify(this.itens));   // após salva essa lista no localStorage para quando sair e voltar da pagina esta o carrinho abastecido//
                                         //esse JSON.stringify converte de objeto para string//
  }

  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id!== produtoId);
                             //filtra todos os itens que não seja o produto produtoid acima, só assim vai deletar somente o produtoId//
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  //metodo para limpar o carrinho//
    limparCarrinho(){
     this.itens =[];    //recebe um vetor vazio, limpa o carrinho//
     localStorage.clear();


    }


}


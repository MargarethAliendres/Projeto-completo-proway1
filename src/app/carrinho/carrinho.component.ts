import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{
                  //colocar essa interface como tipo da  propriedade//
  itensCarrinho: IProdutoCarrinho[] = [];

  total = 0;


  constructor(
    public carrinhoService: CarrinhoService,     // injeta o serviço aqui deixou publico
    private router: Router                // injeta aqui
                  //tenho que aprender quando inserir o activateRouter e quando só o route



    ){}     //injeta a service   se deixar publico , pode chamar lá direto no html

    //quando inicialzar esse componete vai popular a propriedade itensCarrinho
ngOnInit(): void {

  this.itensCarrinho = this.carrinhoService.obtemCarrinho();
  this.calcularTotal();   // chamei esse metodo abaixo aqui para inicializar
}

calcularTotal(){          // prev elemento anterior, curr elemento atual
  this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade),0);
   //percorre todos os itens do carrinho verificar o preço e pegar a quantidade de cada elemento, dai ele vai somando
}  //reduce percorre todos os elementos soma com o que foi calculado e o que esta sendo calculado agora//


  removeProdutoCarrinho(produtoId:number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal();    // apos calculado o total, e deletado algum item esse comando vai deixar o valor exato da compra na tela//


}
comprar(){
  alert ("parabens voce finalizaou sua compra");
  this.carrinhoService.limparCarrinho();     // limpa o carrinho após a compra finalizada//
  this.router.navigate(["produtos"]);   // leva para a pagina incial , tem que colocar os colchetes internamente//
}

  }




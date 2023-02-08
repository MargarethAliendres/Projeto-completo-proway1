import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent {

  produto: IProduto | undefined;      //essa é a propriedade//

  quantidade = 1;    //propriedade daí vamos fazer la no html um two way data biding - para isso vá em produtos.module.ts e adicione o formsModule no importe//

  constructor(
   private produtosService: ProdutosService,    //injetando o ProdutoService   o serviço//
   private route: ActivatedRoute,                //injetando o//
   private notificacaoService: NotificacaoService,  // injetaremos esse serviço
   private servicoCarrinho: CarrinhoService           //tem que importar//

     ){}
              //quando inicializar o componente, vai dizer que vai pegar os paramentros da rota//
 ngOnInit(): void {
  const routeParams = this.route.snapshot.paramMap;  // aqui traz todos os parametros da rota//
  const produtoId = Number(routeParams.get("id"));   //esse id foi o que definimos no path do produtos-routing.module.ts//
                    //esse number é a conversao para numero, pois a rota do paramentro retorna uma string//
  this.produto = this.produtosService.getOne(produtoId);
     //a propriedade acima, recebera todos os produtos do produtosService de acordo com o parametro//

   }

   adicionarAoCarrinho(){    // injetamos acima o serviço o qual criamos anteriormente e configuramos de notificacao.service.ts//
      this.notificacaoService.notificar("O produto foi adicionado ao carrinho");

      const produto: IProdutoCarrinho = {
             ...this.produto!,   //essa ! é para dizer que vai estar definido//
            quantidade: this.quantidade            //junta aqui as variaveis la de cima para adicionar no carrinho.
      }
       this.servicoCarrinho.adicionarCarrinho(produto)

   }

}




import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { FormsModule } from '@angular/forms';

import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';




@NgModule({
  declarations: [
    ProdutosComponent,

    DetalhesProdutoComponent       // aqui dentro tem que ter o import a declaração do component//

  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule


  ]
})
export class ProdutosModule { }

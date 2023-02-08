import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
  { path:'', component: ProdutosComponent }, // aqui abre a propria pagnina produtos//
  { path:':id', component: DetalhesProdutoComponent}   // inseri o componente que criamos do detalhe do produto para quando tiver id abrir essa pagina//
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }

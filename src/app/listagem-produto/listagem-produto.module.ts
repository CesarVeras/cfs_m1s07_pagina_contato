import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ListagemProdutoComponent } from './listagem-produto.component';
import { ListagemProdutoRoutingModule } from './listagem-produto-routing.module';
import { ProdutosService } from '../shared/services/produtos.service';

@NgModule({
  imports: [CommonModule, ListagemProdutoRoutingModule, FormsModule],
  providers: [ProdutosService],
  declarations: [ListagemProdutoComponent],
})
export class ListagemProdutoModule {}

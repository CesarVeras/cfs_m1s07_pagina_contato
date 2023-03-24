import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemProdutoComponent } from './listagem-produto.component';

const routes: Routes = [
  {
    path: '',
    component: ListagemProdutoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemProdutoRoutingModule {}

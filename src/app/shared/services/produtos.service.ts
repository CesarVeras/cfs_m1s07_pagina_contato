import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Produto } from '../interfaces/produto.interface';

@Injectable()
export class ProdutosService {
  private produtos: Array<Produto> = [
    {
      id: 1,
      imagem: 'https://picsum.photos/50/50',
      nome: 'Produto 1',
      valor: 30.5,
    },
    {
      id: 2,
      imagem: 'https://picsum.photos/50/50',
      nome: 'Produto 2',
      valor: 50,
    },
    {
      id: 3,
      imagem: 'https://picsum.photos/50/50',
      nome: 'Produto 3',
      valor: 100,
    },
    {
      id: 4,
      imagem: 'https://picsum.photos/50/50',
      nome: 'Produto 4',
      valor: 12.75,
    },
  ];

  constructor() {}

  listarProdutos() {
    return of(this.produtos);
  }

  adicionarProdutos() {
    // TODO
  }

  removerProdutos() {
    // TODO
  }
}

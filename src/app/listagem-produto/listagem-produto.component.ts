import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/interfaces/produto.interface';
import { ProdutosService } from '../shared/services/produtos.service';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css'],
})
export class ListagemProdutoComponent implements OnInit {
  produtos: Array<Produto> = [];
  totalizador = 0;
  carregado = false;

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    setTimeout(() => {
      this.carregado = true;
    }, 1000);
    this.produtosService.listarProdutos().subscribe((retorno) => {
      this.produtos = retorno;
    });
  }

  adicionarProduto(index: number) {
    this.produtos[index].selecionado = !this.produtos[index].selecionado;
    this.totalizador = this.produtos[index].selecionado
      ? (this.totalizador += this.produtos[index].valor)
      : (this.totalizador -= this.produtos[index].valor);
  }

  checkout() {
    // TODO
  }
}

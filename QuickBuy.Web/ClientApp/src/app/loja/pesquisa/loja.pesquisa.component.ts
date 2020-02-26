import {Component, OnInit } from "@angular/core"
import { Produto } from "../../modelo/produto";
import { ProdutoServico } from "../../servicos/produto/produto.servico";
import { Router } from "@angular/router";

@Component({
  selector: "app-loja",
  templateUrl: "./loja.pesquisa.component.html",
  styleUrls:["./loja.pesquisa.component.css"]
})

export class LojaPesquisaComponet implements OnInit {
  public produtos: Produto[];

    ngOnInit(): void {
        
    }

  constructor(private produtosServico: ProdutoServico, private router: Router) {
     this.produtosServico.obterTodosProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
        },
        e => {
          console.log(e.error);
        })
  }

  public abrirProduto(produto: Produto) {
    sessionStorage.setItem('produtoDetalhe', JSON.stringify(produto));
    this.router.navigate(['/loja-produto']);
  }
}

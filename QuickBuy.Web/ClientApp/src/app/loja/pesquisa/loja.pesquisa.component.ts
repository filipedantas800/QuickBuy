import {Component, OnInit } from "@angular/core"
import { Produto } from "../../modelo/produto";
import { ProdutoServico } from "../../servicos/produto/produto.servico";

@Component({
  selector: "app-loja",
  templateUrl: "./loja.pesquisa.component.html",
  styleUrls:["./loja.pesquisa.component.css"]
})

export class LojaPesquisaComponet implements OnInit {
  public produtos: Produto[];

    ngOnInit(): void {
        
    }

  constructor(private produtosServico: ProdutoServico) {
     this.produtosServico.obterTodosProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
        },
        e => {
          console.log(e.error);
        })
  }
}

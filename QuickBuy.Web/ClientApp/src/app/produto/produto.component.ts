import { Component, OnInit } from "@angular/core"
import { Produto } from "../modelo/produto";
import { ProdutoServico } from "../servicos/produto/produto.servico";

@Component({
  selector: "app-produto",    //eu posso definir o nome da teg onde meu produto será redenizado ou seja class : ProdutoComponent
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]   //é uma estrutura em html, onde eu vou redenizar meu component
})
export class ProdutoComponent implements OnInit {             //Nome de classes começando com maíusculo por conta da convenção PascalCase
  public produto: Produto
  

  constructor(private produtoServico: ProdutoServico) {

  }

  ngOnInit(): void {
    this.produto = new Produto();
  }

  public cadastrar() {
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produtoJson => {
          console.log(produtoJson);
        },
        e => {
          console.log(e.error);
        }

      );
  }
}

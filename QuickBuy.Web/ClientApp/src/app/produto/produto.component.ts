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
  public arquivoSelecionado: File;
  public ativar_spinner: boolean;

  constructor(private produtoServico: ProdutoServico) {

  }

  ngOnInit(): void {
    this.produto = new Produto();
  }

  public inputChange(files: FileList) {
    this.arquivoSelecionado = files.item(0);
    this.ativar_spinner = true;
    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        nomeArquivo => {
          this.produto.nomeArquivo = nomeArquivo;
          console.log(nomeArquivo);
          this.ativar_spinner = false;
        },
        e => {
          console.log(e.error);
          this.ativar_spinner = false;
        });
  }

  public cadastrar() {
    //this.produtoServico.cadastrar(this.produto)
    //  .subscribe(
    //    produtoJson => {
    //      console.log(produtoJson);
    //    },
    //    e => {
    //      console.log(e.error);
    //    }

    //  );
  }
}

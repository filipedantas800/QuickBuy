import {Component} from "@angular/core"

@Component({
  selector: "app-produto", //eu posso definir o nome da teg onde meu produto será redenizado ou seja class : ProdutoComponent
  template : "<html><body>{{ ObterNome() }}</body></html>" //é uma estrutura em html, onde eu vou redenizar meu component
})
export class ProdutoComponent {//Nome de classes começando com maíusculo por conta da convenção PascalCase

  /* camelCase para variáveis, atributos e nomes das funções */
  public nome: string;
  public liberadoParaVenda: boolean;

  public obterNome(): string {
    return "Samsung";
  }
}

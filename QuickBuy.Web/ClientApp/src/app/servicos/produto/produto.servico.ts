import { Injectable, Inject } from "@angular/core";     /*PARA CONFIGURAR A CLASS PARA QUE SEJA INJETADO ALGO EM OUTRA CLASS*/
import { HttpClient, HttpHeaders } from "@angular/common/http"; /* O HttpClient PARA FAZER REQUISIÇÃO WEB, O HttpHeaders PARA CONFIGURAR O CABEÇARIO DA REQUISIÇÃO*/
import { Observable } from "rxjs";
import { Produto } from "../../modelo/produto";

@Injectable({
  providedIn: "root"
})
export class ProdutoServico {

  private _baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  public cadastrar(produto: Produto): Observable<Produto> {

    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco
    }
    return this.http.post<Produto>(this._baseUrl + "api/produto/cadastrar", body, { headers });
  }

  public salvar(produto: Produto): Observable<Produto> {
    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco
    }
    return this.http.post<Produto>(this._baseUrl + "api/produto/salvar", body, { headers });
  }

  public deletar(produto: Produto): Observable<Produto> {
    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco
    }
    return this.http.post<Produto>(this._baseUrl + "api/produto/deletar", body, { headers });
  }
}

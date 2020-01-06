import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/usuario";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls:["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public usuario;
  public returnlUrl: string;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.returnlUrl = this.activatedRouter.snapshot.queryParams['returnUrl']
    this.usuario = new Usuario();
  }

  entrar() {
    if (this.usuario.email == "filipe@dantas.com" && this.usuario.senha == "abc123") {
      sessionStorage.setItem("usuario-autenticado", "1");
      this.router.navigate([this.returnlUrl]);
    }
  }

}

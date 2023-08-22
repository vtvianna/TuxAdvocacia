import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    pessoaCaixa = [
      {nome:  "Maria Silva", idade: 23, altura: 1.70},
      {nome: "Leo dos Anjos", idade: 56, altura: 1.80},
      {nome: "Gabi Alves", idade: 17, altura: 1.60}
    ];
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
 
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

nameButton = "Enviar";
dados = {
  nome: "",
  sobrenome: "",
  cpf: "",
  idade: "",
  endereco: ""
}; 

constructor(private http:HttpClient){}

cadastro(form:any){

this.http.post('http://localhost:3000/info',form.value, this.httpOptions).subscribe();

  }
}




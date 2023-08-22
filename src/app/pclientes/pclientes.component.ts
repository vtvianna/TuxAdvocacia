import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Pclientes } from '../model/pclientes.componet';

@Component({
  selector: 'app-pclientes',
  templateUrl: './pclientes.component.html',
  styleUrls: ['./pclientes.component.css']
})
export class PclientesComponent implements OnInit {
  
  /* Meu array de fotos */
  infoCadastro:Pclientes[] = [];
  constructor(private http: HttpClient){}
 
  /* Metodo responsavel por carregar tudo dentro dele na inicialização do componente */
  ngOnInit(): void {
    this.http.get<Pclientes[]>('http://localhost:3000/info').subscribe(info => this.infoCadastro = info  );
  }


  mostrarClientesMais60 = false;
  clientesFiltrados: typeof this.infoCadastro = [];

  alternarExibicaoClientesMais60() {
    this.mostrarClientesMais60 = !this.mostrarClientesMais60;

    if (this.mostrarClientesMais60) {
      this.clientesFiltrados = this.infoCadastro.filter(info => info.idade > 60);
    } else {
      this.clientesFiltrados = [];
    }
  }
}


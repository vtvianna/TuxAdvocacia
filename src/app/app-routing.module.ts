import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { PclientesComponent } from './pclientes/pclientes.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroComponent },
  {path: 'home', component: HomeComponent },
  {path: 'pclientes', component: PclientesComponent },
  {path: 'Login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

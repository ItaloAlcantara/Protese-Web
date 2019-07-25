import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { AdmCadastroComponent } from './adm-cadastro/adm-cadastro.component';
import { ProdutosComponent } from './produtos/produtos.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProdutosDetailsComponent } from './produtos-details/produtos-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    CadastrosComponent,
    SolicitacaoComponent,
    AdmCadastroComponent,
    ProdutosComponent,
    ProdutosDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { LoginComponent } from './login/login.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { AdmCadastroComponent } from './adm-cadastro/adm-cadastro.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosDetailsComponent } from './produtos-details/produtos-details.component';


export const ROUTES: Routes = [
    {path:'home', component:HomeComponent},
    {path:'cadastros', component:CadastrosComponent},
    {path:'login', component:LoginComponent},
    {path:'solicitacao', component:SolicitacaoComponent},
    {path:'admCadastro', component:AdmCadastroComponent},
    {path:'login', component:LoginComponent},
    {path:'produtos',component:ProdutosComponent},
    {path:'produtosDetails',component:ProdutosDetailsComponent}
]
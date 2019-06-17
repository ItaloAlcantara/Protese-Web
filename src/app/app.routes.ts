import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { LoginComponent } from './login/login.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { AdmCadastroComponent } from './adm-cadastro/adm-cadastro.component';

export const ROUTES: Routes = [
    {path:'home', component:HomeComponent},
    {path:'cadastros', component:CadastrosComponent},
    {path:'login', component:LoginComponent},
    {path:'solicitacao', component:SolicitacaoComponent},
    {path:'admCadastro', component:AdmCadastroComponent}
]
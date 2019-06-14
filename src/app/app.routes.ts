import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { LoginComponent } from './login/login.component';

export const ROUTES: Routes = [
    {path:'home', component:HomeComponent},
    {path:'cadastros', component:CadastrosComponent},
    {path:'login', component:LoginComponent}
]
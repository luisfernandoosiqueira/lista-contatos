import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';

export const routes: Routes = [

{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'home', component:HomeComponent},
{path:'cadastro', component:CadastroComponent},
{path:'listagem', component:ListaComponent},

    
];

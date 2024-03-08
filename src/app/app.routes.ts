import { Routes } from '@angular/router';
import { CadastrarComponent } from './components/controle-pressao/cadastrar/cadastrar.component';
import { ConsultarComponent } from './components/controle-pressao/consultar/consultar.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
      path: 'consultar',
      component: ConsultarComponent
    },
    {
      path: 'cadastrar',
      component: CadastrarComponent
    }
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarAnimalComponent } from './components/views/animal/cadastrar/cadastrar.component';
import { CadastrarClienteComponent } from './components/views/cliente/cadastrar/cadastrar.component';
import { ClienteListarComponent } from './components/views/cliente/listar/listar.component';
import { FuncionarioCadastrarComponent } from './components/views/funcionario/cadastrar/cadastrar.component';
import { FuncionarioListarComponent } from './components/views/funcionario/listar/listar.component';
//import { CadastrarComponent } from './components/views/funcionario/cadastrar/cadastrar.component';
//import { ListarComponent } from './components/views/funcionario/listar/listar.component';


const routes: Routes = [
  {
    path: '',
    component: FuncionarioListarComponent
  },
  {
    path: 'funcionario/cadastrar',
    component: FuncionarioCadastrarComponent
  },
  {
    path: 'cliente/cadastrar',
    component: CadastrarClienteComponent
  },
  {
    path: 'cliente/alterar/:id',
    component: CadastrarClienteComponent
  },
  {
    path: 'cliente/listar',
    component: ClienteListarComponent
  },
  {
    path: 'animal/cadastrar',
    component: CadastrarAnimalComponent
  }
  // {
  //   path: 'procedimento/cadastrar',
  //   component: CadastrarComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

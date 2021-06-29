import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

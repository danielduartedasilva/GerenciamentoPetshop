import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { FuncionarioListarComponent } from './components/views/funcionario/listar/listar.component';
import { FuncionarioCadastrarComponent } from './components/views/funcionario/cadastrar/cadastrar.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './components/template/content/content.component';
import { ClienteListarComponent } from '../app/components/views/cliente/listar/listar.component';
import { CadastrarClienteComponent } from '../app/components/views/cliente/cadastrar/cadastrar.component';
import { CadastrarAnimalComponent } from './components/views/animal/cadastrar/cadastrar.component';
//import { ProcedimentoListarComponent } from './components/views/procedimento/listar/listar.component';
//import { ProcedimentoCadastrarComponent } from './components/views/procedimento/cadastrar/cadastrar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ListarComponent } from './components/views/procedimento/listar/listar.component';
import { CadastrarComponent } from './components/views/procedimento/cadastrar/cadastrar.component';




@NgModule({
  declarations: [
    AppComponent,
    FuncionarioListarComponent,
    FuncionarioCadastrarComponent,
    HeaderComponent,
    ContentComponent,
    CadastrarClienteComponent,
    ClienteListarComponent,
    CadastrarAnimalComponent,
    ListarComponent,
    CadastrarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

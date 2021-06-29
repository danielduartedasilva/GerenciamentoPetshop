import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarClienteComponent implements OnInit {
  colunasCliente = ["nome", "cpf", "telefone","endereco","animal","editar"];
  
  alterar: boolean = false;
  clienteTemp: Cliente = new Cliente();

  idCliente!: string;
  nomeCliente!: string;
  cpfCliente!: string;
  telefoneCliente!: string;
  enderecoCliente!: string;
  animalCliente!: string;
  
  clientes = new MatTableDataSource<Cliente>();

  constructor(
    private service:ClienteService,
    private router: Router,
    private snack: MatSnackBar
  )
  { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    this.alterar = false;
    let cliente = new Cliente();
    cliente.nome = this.nomeCliente;
    cliente.cpf = this.cpfCliente;
    cliente.telefone = this.telefoneCliente;
    cliente.endereco = this.enderecoCliente;

    //precisa ser revisto para quanto estiver com muitos animais
    cliente.animal.forEach(el =>{
      el._id = this.animalCliente;
    });

    this.service.cadastrar(cliente).subscribe(cliente => {
      this.snack.open("Cliente cadastrado", "Cliente", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }

  adicionarCliente(){

  }
  atualizarCliente(){
    
  }
  alterarCliente(cliente:Cliente){

  }


}

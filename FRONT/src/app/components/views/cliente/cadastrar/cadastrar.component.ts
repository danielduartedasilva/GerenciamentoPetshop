import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { Animal } from 'src/app/models/Animal';
import { AnimalService } from 'src/app/services/animal.service';
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarClienteComponent implements OnInit {
  colunasAnimal = ["nomeAnimal", "tipoAnimal","editar"];
  
  alterar: boolean = false;
  clienteTemp: Cliente = new Cliente();  

  idCliente!: string;
  nomeCliente!: string;
  cpfCliente!: string;
  telefoneCliente!: string;
  enderecoCliente!: string;
  animalCliente!: string;
  
  
  idAnimal!: string;
  idUltimoAnimalInserido!: string;
  nomeAnimal!: string;
  tipoAnimal!: string;

  //clientes = new MatTableDataSource<Cliente>();
  animais = new MatTableDataSource<Animal>();  

  constructor(
    private service:ClienteService,
    private serviceAnimal:AnimalService,
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
    
    //cadastra o cliente novo
    this.service.cadastrar(cliente).subscribe(cli => {
      this.snack.open("Cliente cadastrado", "Cliente", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      cliente._id = cli._id;
      //busca a lista de animais que podem existir
      this.serviceAnimal.listar()
      .subscribe(animal => {
        animal.forEach(an =>{
          //atualiza o ID do cliente dentro de Animal
          an.cliente = cli._id;
          //empilha a lista de animais dentro do cliente
          cliente.animal.push(an);
        });        
      });
     
      //atualiza o cliente no banco de dados
      this.service.atualizaCliente(cliente).subscribe(el =>{

      });
      //cliente.animal.push(animal);
      this.router.navigate([""]);
    });      
  }
  
  atualizarCliente(){
    
  }
  alterarCliente(cliente:Cliente){

  }

  adicionarAnimal(){  
    let animal = new Animal();  
    animal.nome = this.nomeAnimal;
    animal.tipo = this.tipoAnimal;
    //cria um ID fake de cliente que depois será atualizado
    animal.cliente = "123456789";
    //adiciona na tabela de animais
    this.animais.data.push(animal);
    this.animais._updateChangeSubscription();
    //adiciona no banco de dados o animal
    // this.serviceAnimal.cadastrar(animal).subscribe(animal =>{
    //   this.idUltimoAnimalInserido = animal._id;
    //   this.snack.open("Animal cadastrado", "Animal", {
    //     duration: 4000,
    //     horizontalPosition: "right",
    //     verticalPosition: "top",
    //   });
    // });
    //limpa os campos
    this.nomeAnimal = ""; 
  }
  atualizarAnimal(){

  }
}

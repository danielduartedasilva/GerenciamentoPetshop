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
  colunasAnimal = ["nomeAnimal", "tipoAnimal", "editar"];

  alterar: boolean = false;

  cliente = new Cliente();
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
  animalTemp = new Animal();
  //clientes = new MatTableDataSource<Cliente>();
  animais = new MatTableDataSource<Animal>();

  constructor(
    private service: ClienteService,
    private serviceAnimal: AnimalService,
    private router: Router,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    this.alterar = false;
    // this.serviceAnimal.listar().subscribe(listaAnimais => {
    //   listaAnimais.forEach(animal => {
    //     if (animal.cliente === this.cliente._id) {
    //       this.cliente.animal.push(animal);
    //     }
    //   });
    // });
    
    try {
      this.service.atualizaCliente(this.cliente).subscribe(cli => {
        this.snack.open("Cliente cadastrado", "Cliente", {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
        });
      });  
    } catch (error) {
      console.log(error);
    }
    
    //this.router.navigate([""]);
  }
  adicionarCliente() {
    this.cliente.nome = this.nomeCliente;
    this.cliente.cpf = this.cpfCliente;
    this.cliente.telefone = this.telefoneCliente;
    this.cliente.endereco = this.enderecoCliente;
    try {
      //cadastra o cliente novo
      this.service.cadastrar(this.cliente).subscribe(cli => {
        this.cliente._id = cli._id;
        this.snack.open("Cliente pré cadastrado", "Cliente", {
          duration: 4000,
          horizontalPosition: "right",
          verticalPosition: "top",
        });
      });
    } catch (error) {
      this.snack.open("oops! Não foi possível cadastrar", "Cliente", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
    }
  }
  atualizarCliente() {

  }
  alterarCliente(cliente: Cliente) {

  }

  adicionarAnimal() {
    //let animal = new Animal();  
    this.animalTemp.nome = this.nomeAnimal;
    this.animalTemp.tipo = this.tipoAnimal;
    this.animalTemp.cliente = this.cliente._id;
    //adiciona na tabela de animais
    this.animais.data.push(this.animalTemp);
    this.animais._updateChangeSubscription();
    //adiciona no banco de dados o animal
    this.serviceAnimal.cadastrar(this.animalTemp).subscribe(animal => {
      this.animalTemp._id = animal._id;
      this.snack.open("Animal cadastrado", "Animal", {
        duration: 4000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
    });
    //limpa os campos
    //this.nomeAnimal = ""; 
  }
  atualizarAnimal() {

  }
}

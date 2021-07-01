import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/models/Animal';
import { AnimalService } from 'src/app/services/animal.service';
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarClienteComponent implements OnInit {
  colunasAnimal = ["nomeAnimal", "tipoAnimal", "editar"];

  alterarCLi: boolean = false;
  alterarAni: boolean = false;
  alterar: boolean = false;

  cliente = new Cliente();
  idCliente!: string;
  nomeCliente!: string;
  cpfCliente!: string;
  telefoneCliente!: string;
  enderecoCliente!: string;
  animalCliente!: string;
  
  idAnimal!: string;
  nomeAnimal!: string;
  tipoAnimal!: string;

  animalTemp = new Animal();
  //clientes = new MatTableDataSource<Cliente>();
  animais = new MatTableDataSource<Animal>();

  constructor(
    private service: ClienteService,
    private serviceAnimal: AnimalService,
    private router: Router,
    private route: ActivatedRoute,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      this.idCliente = id;
      this.carregarDados(id);
    }
    if(this.alterarCLi == true){
      this.alterar = true;
    }else{
      this.alterar = false;
    }
  }
  carregarDados(id: string) {
    this.alterarCLi = true;
    this.service.procurarClientePorID(id).subscribe((cliente) => {
      this.cliente = cliente;
      this.nomeCliente = cliente.nome;
      this.cpfCliente = cliente.cpf;
      this.telefoneCliente = cliente.telefone;
      this.enderecoCliente = cliente.endereco;
    });
    //busca alista de animais gerais
    this.serviceAnimal.listar().subscribe(listaAnimais => {
      listaAnimais.forEach(el => {
        //carrega os animais do cliente
        if (el.cliente == this.cliente._id) {
          this.animais.data.push(el);
          this.animais._updateChangeSubscription();
        }
      });
    });
  }
  cadastrar(): void {    
    this.alterarCLi = false;

    this.nomeCliente = "";
    this.cpfCliente = "";
    this.telefoneCliente = "";
    this.enderecoCliente = "";

    try {
      this.snack.open("Cadastro realizado", "Cliente", {
        duration: 6000,
        horizontalPosition: "right",
        verticalPosition: "top",
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
        this.snack.open("Cliente cadastrado", "Cliente", {
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
  updateCliente(){    
    this.cliente._id = this.idCliente;
    this.cliente.nome = this.nomeCliente;
    this.cliente.cpf = this.cpfCliente;
    this.cliente.telefone = this.telefoneCliente;
    this.cliente.endereco = this.enderecoCliente;
    
    this.service.atualizaCliente(this.cliente).subscribe(()=>{
      this.snack.open("Cliente atualizado", "Cliente", {
        duration: 4000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
    });
    this.nomeCliente     = this.cliente.nome;
    this.cpfCliente      = this.cliente.cpf;
    this.telefoneCliente = this.cliente.telefone;
    this.enderecoCliente = this.cliente.endereco;
    this.router.navigate(['cliente/listar']);

    this.alterarCLi = false;
  }

  adicionarAnimal() {
    let animalTemp = new Animal();
    animalTemp.nome = this.nomeAnimal;
    animalTemp.tipo = this.tipoAnimal;
    animalTemp.cliente = this.cliente._id;
    //adiciona na tabela de animais
    this.animais.data.push(animalTemp);
    this.animais._updateChangeSubscription();
    //adiciona no banco de dados o animal
    this.serviceAnimal.cadastrar(animalTemp).subscribe(animal => {
      this.snack.open("Animal cadastrado", "Animal", {
        duration: 4000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
    });
    //limpa os campos
    this.nomeAnimal = "";
    this.tipoAnimal = "";
  }
  alterarAnimal(animal: Animal) {
    this.idAnimal = animal._id;
    this.nomeAnimal = animal.nome;
    this.tipoAnimal = animal.tipo;    
  }
  atualizarAnimal() {
    this.animalTemp.nome = this.nomeAnimal;  
    this.animalTemp.tipo = this.tipoAnimal;
    this.animalTemp._id  = this.idAnimal;

    let animalTemp: Animal[] = [];
    this.serviceAnimal.atualizarAnimal(this.animalTemp).subscribe(() => {
      this.snack.open("Animal atualizado", "Animal", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
    });    
    
    this.serviceAnimal.listar().subscribe(el =>{
      el.forEach(animal=>{
        if(animal.cliente == this.cliente._id){
          animalTemp.push(animal);                    
        }
      });
    }); 
    
    this.animais = new MatTableDataSource<Animal>(animalTemp);
    animalTemp.forEach(lista=>{
      this.animais.data.push(lista);
    });
    this.animais._updateChangeSubscription();    
    this.alterarAni = false;
  }//fim atualizarAnimal
}

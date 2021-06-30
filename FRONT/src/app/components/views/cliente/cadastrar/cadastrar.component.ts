import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { Animal } from "src/app/models/Animal";
import { Cliente } from "src/app/models/Cliente";
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarClienteComponent implements OnInit {
  colunasAnimal = ["nome", "tipo"];

  nomeCliente!: string;
  cpfCliente!: string;
  telefoneCliente!: string;
  enderecoCliente!: string;

  nomeAnimal!: string;
  tipoAnimal!: string;
  clienteAnimal!: string;
  animais = new MatTableDataSource<Animal>();

  constructor(
    private service: ClienteService,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let cliente = new Cliente();
    cliente.nome = this.nomeCliente;
    cliente.cpf = this.cpfCliente;
    cliente.telefone = this.telefoneCliente;
    cliente.endereco = this.enderecoCliente;
    cliente.animal = this.animais.data;
    this.service.cadastrar(cliente).subscribe(cliente => {
      console.log(cliente);
      this.snack.open("Cliente cadastrado", "Cliente", {
        duration: 4000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }

  adicionarAnimal(): void {
    let animal = new Animal();
    animal.nome = this.nomeAnimal;
    animal.tipo = this.tipoAnimal;
    this.animais.data.push(animal);
    this.animais._updateChangeSubscription();
    this.nomeAnimal = "";
    this.tipoAnimal = "";
  }
}

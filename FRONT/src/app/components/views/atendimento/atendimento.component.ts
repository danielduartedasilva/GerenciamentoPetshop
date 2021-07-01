import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';
import { Cliente } from 'src/app/models/Cliente';
import { Funcionario } from 'src/app/models/Funcionario';
import { Procedimento } from 'src/app/models/Procedimento';
import { AnimalService } from 'src/app/services/animal.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { ProcedimentoService } from 'src/app/services/procedimento.service';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})
export class AtendimentoComponent implements OnInit {
  clientes: Cliente[] = [];
  funcionarios: Funcionario[] = [];
  animais: Animal[] = [];
  procedimentos: Procedimento[] = [];

  constructor(
    private serviceCliente: ClienteService,
    private serviceFuncionario: FuncionarioService,
    private serviceAnimal: AnimalService,
    private serviceProcedimento: ProcedimentoService
    ) { }

  ngOnInit(): void {
    this.serviceCliente.listar().subscribe(lista =>{
      this.clientes = lista;
    });

    this.serviceFuncionario.listar().subscribe(lista =>{
      this.funcionarios = lista;
    });

    this.serviceAnimal.listar().subscribe(lista =>{
      this.animais = lista;
    });
    this.serviceProcedimento.listar().subscribe(lista =>{
      this.procedimentos = lista;
    });
  }

}

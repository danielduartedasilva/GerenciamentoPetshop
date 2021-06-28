import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  funcionarios: Funcionario[] = [];

  constructor(private servive: FuncionarioService) {}

  ngOnInit(): void {
    this.servive.listar().subscribe((funcionarios) => {
        this.funcionarios = funcionarios;
      });
    }
}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Procedimento } from 'src/app/models/Procedimento';
import { ProcedimentoService } from 'src/app/services/procedimento.service';

import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  nome!: string;
  valor!: number;

  colunasProcedimento = ["nomeProcedimento", "valorProcedimento"];
  procedimentos = new MatTableDataSource<Procedimento>();
  constructor(private service: ProcedimentoService,
    private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    let procedimento = new Procedimento();
    procedimento.nome = this.nome;
    procedimento.valor = this.valor;
    this.service.cadastrar(procedimento).subscribe((procedimento) => {
      this.snack.open("Procedimento cadastrado", "Ciclo", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
    });
  }
  adicionarProcedimento(){
    let procedimento = new Procedimento();
    procedimento.nome = this.nome;
    procedimento.valor = this.valor;
    this.procedimentos.data.push(procedimento);
    this.procedimentos._updateChangeSubscription();
    this.nome = "";
    this.valor = 0;
  }
}

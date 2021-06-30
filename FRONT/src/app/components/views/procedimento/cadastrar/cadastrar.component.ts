import { Component, OnInit } from '@angular/core';
import { Procedimento } from 'src/app/models/Procedimento';
import { ProcedimentoService } from 'src/app/services/procedimento.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  nome!: string;
  valor!: number;
  constructor(private service: ProcedimentoService) { }

  ngOnInit(): void {
  }

    cadastrar(): void {
    let procedimento = new Procedimento();
    procedimento.nome = this.nome;
    procedimento.valor = this.valor;
    this.service.cadastrar(procedimento).subscribe((procedimento) => {
       console.log(procedimento);
    });
  }

}

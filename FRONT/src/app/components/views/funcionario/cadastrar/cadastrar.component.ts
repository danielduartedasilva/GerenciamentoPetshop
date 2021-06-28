import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  nome!: string;
  cpf!: string;
  telefone!: string;
  endereco!: string;
  funcao!: string;

  constructor(private service: FuncionarioService) { }

  ngOnInit(): void { }

  cadastrar(): void {
    let funcionario = new Funcionario();
    funcionario.nome = this.nome;
    funcionario.cpf = this.cpf;
    funcionario.telefone = this.telefone;
    funcionario.endereco = this.endereco;
    funcionario.funcao = this.funcao;
    this.service.cadastrar(funcionario).subscribe((funcionario) => {
       console.log(funcionario);
    });
  }
}

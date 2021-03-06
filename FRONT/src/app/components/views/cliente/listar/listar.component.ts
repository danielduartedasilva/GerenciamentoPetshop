import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  clientes!: MatTableDataSource<Cliente>;
  clientesColunas: string[] = ['id','nome','cpf','telefone','endereco','criadoEm','editar'];

  constructor(private service: ClienteService,private router: Router) { }

  ngOnInit(): void {
    this.service.listar().subscribe(clientes =>{      
      this.clientes = new MatTableDataSource<Cliente>(clientes);
    });
  }
  alterarCliente(cliente: Cliente){
    this.router.navigate(['cliente/cadastrar',{id:cliente._id}]);
  }
}

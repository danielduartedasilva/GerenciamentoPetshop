import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/Cliente';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  clientes!: MatTableDataSource<Cliente>;
  clientesColunas: string[] = ['id'];

  constructor() { }

  ngOnInit(): void {
  }

}

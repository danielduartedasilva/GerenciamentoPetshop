import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Procedimento } from 'src/app/models/Procedimento';
import { ProcedimentoService } from 'src/app/services/procedimento.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  procedimentos!: MatTableDataSource<Procedimento>;
  procedimentoColunas: string[] = ['id','nome','valor','criadoEm'];

  constructor(private service: ProcedimentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((procedimentos) => {
      this.procedimentos = new MatTableDataSource<Procedimento>(procedimentos);
    });
  }

}
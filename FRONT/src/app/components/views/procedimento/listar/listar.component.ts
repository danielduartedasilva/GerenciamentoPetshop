import { Component, OnInit } from '@angular/core';
import { Procedimento } from 'src/app/models/Procedimento';
import { ProcedimentoService } from 'src/app/services/procedimento.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  procedimentos: Procedimento[] = [];
  constructor(private servive: ProcedimentoService) { }

  ngOnInit(): void {
        this.servive.listar().subscribe((procedimentos) => {
        this.procedimentos = procedimentos;
      });
  }

}
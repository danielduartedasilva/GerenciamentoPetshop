import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Procedimento } from '../models/Procedimento';

@Injectable({
  providedIn: 'root'
})
export class ProcedimentoService {
  private baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) {

   }
   listar(): Observable<Procedimento[]>{
    return this.http.get<Procedimento[]>(`${this.baseUrl}procedimento/listar`); // ----------------------------equivalente a let url = "http://localhost:3000/" + "procedimento/listar/";
  }

  cadastrar(procedimento: Procedimento): Observable<Procedimento>{
    return this.http.post<Procedimento>(`${this.baseUrl}procedimento/cadastrar`, procedimento);
  }
}

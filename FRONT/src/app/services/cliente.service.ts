import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.baseUrl}cliente/listar`); // ----------------------------equivalente a let url = "http://localhost:3000/" + "cliente/listar/";
  }

  cadastrar(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.baseUrl}cliente/cadastrar`, cliente);
  }
  
  atualizaCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.baseUrl}cliente/alterar`,cliente);
  }
}

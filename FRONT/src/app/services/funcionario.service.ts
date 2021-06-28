import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) { }
listar(): Observable<Funcionario[]>{
  return this.http.get<Funcionario[]>(`${this.baseUrl}funcionario/listar`); // ----------------------------equivalente a let url = "http://localhost:3000/" + "funcionario/listar/";
}
cadastrar(funcionario: Funcionario): Observable<Funcionario>{
  return this.http.post<Funcionario>(`${this.baseUrl}funcionario/cadastrar`, funcionario);
} 

}

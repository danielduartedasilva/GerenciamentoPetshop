import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../models/Animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  listar(): Observable<Animal[]>{
    return this.http.get<Animal[]>(`${this.baseUrl}animal/listar`); // ----------------------------equivalente a let url = "http://localhost:3000/" + "animal/listar/";
   }
   
   cadastrar(animal: Animal): Observable<Animal>{
     return this.http.post<Animal>(`${this.baseUrl}animal/cadastrar`, animal);
   } 
}



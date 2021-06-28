import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {
  private baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) { }
}

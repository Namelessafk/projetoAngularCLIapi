import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatosListagemService {

  contatosURL = "http://localhost:3000/contatos"

  constructor(private http: HttpClient) { }

  listarContatos(){
    return this.http.get<any[]>(`${this.contatosURL}`);
  }

}
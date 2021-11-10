import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatosListagemService {

  constructor(private http: HttpClient) { }

  listarContatos() : Observable<any>{
    return this.http.get("https://localhost:4200/contatos");
  }
}

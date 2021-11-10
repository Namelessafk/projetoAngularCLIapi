import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos = [
    { id: 1 , nome: 'Felix', email: 'felixfeliz@gmail.com'},
    { id: 2, nome: 'Kowalski', email: 'conrad¬@gmail.com'}
  ];
  


  constructor() { }

  ngOnInit(): void {
  }

}

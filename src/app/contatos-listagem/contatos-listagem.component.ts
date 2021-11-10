import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos: Array<any> = new  Array();
  


  constructor() { }

  ngOnInit(): void {
    this.listarContatos()
  }

  listarContatos(){

  }


}

import { Component, OnInit } from '@angular/core';
import { ContatosListagemService } from '../contatos-listagem.service';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos: Array<any> = new  Array();
  


  constructor(private contatosService: ContatosListagemService) { }

  ngOnInit(): void {
    this.listarContatos()
  }

  listarContatos(){

  }


}

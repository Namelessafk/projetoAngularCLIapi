import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContatosListagemComponent } from './contatos-listagem/contatos-listagem.component';

import {ContatosListagemService} from './contatos-listagem.service';

@NgModule({
  declarations: [
    AppComponent,
    ContatosListagemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContatosListagemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { TestBed } from '@angular/core/testing';

import { ContatosListagemService } from './contatos-listagem.service';

describe('ContatosListagemService', () => {
  let service: ContatosListagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatosListagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

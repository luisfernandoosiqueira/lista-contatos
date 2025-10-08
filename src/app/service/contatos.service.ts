import { Injectable } from '@angular/core';

export interface Contato {
  id?: number;
  nome: string;
  telefone: string;
}

@Injectable({ providedIn: 'root' })
export class ContatoService {
  listaContatos: Contato[] = [];
  id: number = 0;

  constructor() {}

  add(contato: Contato): void {
    contato.id = this.proximoId();
    this.listaContatos.push(contato);
  }

  adicionarContato(nome: string, telefone: string): void {
    let contato: Contato = {
      id: this.proximoId(),
      nome: nome,
      telefone: telefone
    };
    this.listaContatos.push(contato);
  }

  findAll(): Contato[] {
    return this.listaContatos;
  }

  private proximoId(): number {
    return this.id++;
  }
}

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';     
import { FormsModule } from '@angular/forms';        
import { InputTextModule } from 'primeng/inputtext'; 
import { ButtonModule } from 'primeng/button';       
import { ContatoService, Contato } from '../service/contatos.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  labelNovoContato: string = 'Salvar';
  nome: string = '';
  telefone: string = '';

  constructor(public contatoService: ContatoService, private router: Router) {}

novoContato(): void {
  if (!this.nome.trim() || !this.telefone.trim()) {
    alert('Preencha Nome e Telefone antes de salvar.');
    return;
  }

  const contato: Contato = { nome: this.nome, telefone: this.telefone };

  this.contatoService.add(contato);

  alert(`Contato salvo com sucesso:
Nome: ${this.nome}
Telefone: ${this.telefone}`);

  // limpar campos
  this.nome = '';
  this.telefone = '';

this.router.navigate(['/listagem']);

}

}

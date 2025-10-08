import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ContatoService, Contato } from '../service/contatos.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule, TableModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent {
  constructor(public contatoService: ContatoService) {}

  get contatos(): Contato[] {
    return this.contatoService.findAll();
  }
}

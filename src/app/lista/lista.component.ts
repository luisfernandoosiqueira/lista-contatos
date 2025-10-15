import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { NovoContatoService, Contato } from '../service/novo-contato.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule, TableModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  
  contatos: Contato[] = [];

  constructor(
    private router: Router,
    private novoContatoService: NovoContatoService
  ) {}

  ngOnInit(): void {
    this.novoContatoService.findAll().subscribe({
      next: (contatos) => (this.contatos = contatos),
      error: (err) => alert(err?.message ?? 'Erro ao consultar API'),
    });
  }

  visualizar(id: number): void {
    this.router.navigate(['contatodetails', id]);
  }
}

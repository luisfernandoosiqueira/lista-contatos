import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
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
export class ListaComponent implements OnInit {
  contatos: Contato[] = [];

  constructor(public contatoService: ContatoService, private router: Router) {}

  ngOnInit(): void {
    this.contatos = this.contatoService.findAll();
  }

  visualizar(id: number): void {
    this.router.navigate(['contatodetails', id]);
    // ou: this.router.navigate(['visualizar', id]);
  }
}

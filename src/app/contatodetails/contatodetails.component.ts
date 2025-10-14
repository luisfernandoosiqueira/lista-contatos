import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ContatoService, Contato } from '../service/contatos.service';

@Component({
  selector: 'app-contatodetails',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule, CardModule],
  templateUrl: './contatodetails.component.html',
  styleUrls: ['./contatodetails.component.scss']
})
export class ContatodetailsComponent implements OnInit {
  contato?: Contato;

  constructor(private route: ActivatedRoute, private contatoService: ContatoService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!Number.isNaN(id)) {
      this.contato = this.contatoService.findAll().find(c => c.id === id);
    }
  }
}

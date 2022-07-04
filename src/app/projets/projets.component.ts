import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/projet.model';
import { ProjetService } from '../services/projets.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit {

  projets!: Projet[];

  constructor(private projetService : ProjetService) { }

  ngOnInit(): void {
    this.projets = this.projetService.getAllProjets();
  }

}

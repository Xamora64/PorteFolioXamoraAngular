import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projet } from '../models/projet.model';
import { ProjetService } from '../services/projets.service';

@Component({
  selector: 'app-projet-resume',
  templateUrl: './projet-resume.component.html',
  styleUrls: ['./projet-resume.component.scss']
})
export class ProjetResumeComponent implements OnInit {

  @Input() projet!: Projet;

  constructor(private projetService : ProjetService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onViewFaceSnap(): void{
    this.router.navigateByUrl('projets/' + this.projet.id)
  }

}

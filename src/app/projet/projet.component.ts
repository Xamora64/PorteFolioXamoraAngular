import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projet } from '../models/projet.model';
import { ProjetService } from '../services/projets.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  projet!: Projet;
  idImage!: number;

  constructor(private projetService : ProjetService,
              private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    const projetID = +this.route.snapshot.params['id'];
    this.projet = this.projetService.getProjetbyID(projetID);

    this.idImage = 0;
  }

  cliqueMoins(): void{
    if(this.idImage > 0){
      this.idImage--;
    }
  }

  cliquePlus(): void{
    if(this.projet.imageUrl != null && this.idImage < this.projet.imageUrl?.length - 1){
      this.idImage++;
    }
  }

  cliqueLienProjet() : void{
    window.open(this.projet.lienProjet)
  }

}

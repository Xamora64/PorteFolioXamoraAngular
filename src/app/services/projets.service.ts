import { Injectable } from "@angular/core";
import { Projet } from "../models/projet.model";


@Injectable({
    providedIn: 'root'
})
export class ProjetService {
  projets: Projet[] = [
      {
        id : 0,
        titre : "King & Knight",
        language: "Scratch",
        descriptionRapide : "Jeu 1vs1  stratégique sur Scratch",
        description : "Jeu, auquelle j'ai mis 2 ans, entre 14-16ans à développer ce jeu dans mon temps sur scratch",
        date : new Date(2019, 8, 27),
        imageUrl : ["assets/projet-0/King1.png","assets/projet-0/King2.png","assets/projet-0/King3.png","assets/projet-0/King4.png","assets/projet-0/King5.png"],
        lienProjet: "https://scratch.mit.edu/projects/325659266/",
      },
      {
        id : 1,
        titre : "Jeu Test Unity",
        language: "C#",
        description : "J'étais curieux d'unity, alors j'ai essayé de faire un petit jeu de platforme",
        date : new Date(),
        imageUrl: ["assets/projet-1/Plateformer1.jpg", "assets/projet-1/Plateformer2.jpg", "assets/projet-1/Plateformer3.jpg"],
      },
      
  ]

  getAllProjets(): Projet[]{
    return this.projets;
  }

  getProjetbyID(projetId:number){
    const projet = this.projets.find(projet => projet.id === projetId);
    if(!projet){
      throw new Error("Le projet n'est pas trouvé");
    }
    else{
      return projet;
    }
  }

}
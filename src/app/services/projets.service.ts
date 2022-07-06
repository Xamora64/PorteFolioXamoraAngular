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
        description : "Un jeu crée en 2 ans, entre mes 14 et 16 ans, j'ai développé ce jeu sur mon temps libre sur scratch",
        date : new Date(2019, 7, 27),
        imageUrl : ["assets/projet-0/King1.png","assets/projet-0/King2.png","assets/projet-0/King3.png","assets/projet-0/King4.png","assets/projet-0/King5.png"],
        lienProjet: "https://scratch.mit.edu/projects/325659266/",
      },
      {
        id : 1,
        titre : "Jeu Test Unity",
        language: "C#",
        description : "J'étais curieux d'utiliser unity, alors j'ai fait une éboche d'un jeu de plateforme",
        date : new Date(2021, 3, 11),
        imageUrl: ["assets/projet-1/Plateformer1.jpg", "assets/projet-1/Plateformer2.jpg", "assets/projet-1/Plateformer3.jpg"],
      },
      {
        id : 2,
        titre : "Bot Discord",
        language: "Javascript",
        descriptionRapide :"Un bot discord pour un serveur Minecraft",
        description : "Je possède une commaunuté Minecraft autour de Dragon Ball Z, j'ai décidé faire un bot pour rendre tout plus simple à effectuer dans mon serveur et autre aide, tout fait à la main",
        date : new Date(2021, 5, 24),
        imageUrl: ["assets/projet-2/bot1.png", "assets/projet-2/bot2.png", "assets/projet-2/bot3.png", "assets/projet-2/bot4.png"],
      },
      {
        id : 3,
        titre : "Projet NSI 'Mage'",
        language: "Python",
        descriptionRapide :"Un projet NSI durant ma 1ère",
        description : "Ce projet NSI avait pour but de faire un jeu de combat 1 contre 1, dans mon groupe de travail, on a décidé de faire un jeu de combat entre deux mages, qui s'envoie des boules de feu et d'électricité jusqu'à que l'autre meurt. Vous pouvez aussi esquiver en sautant",
        date : new Date(2021, 3, 9),
        imageUrl: ["assets/projet-3/mage1.png", "assets/projet-3/mage2.png", "assets/projet-3/mage3.png"],
        lienProjet: "https://github.com/Xamora64/ProjectNSI",
      },
      {
        id : 4,
        titre : "Projet NSI 'Echec'",
        language: "Python",
        descriptionRapide :"Un projet NSI durant ma terminal",
        description : "Ce projet NSI avait pour but de faire un jeu d'échec, on a pu faire un jeu d'échec fonctionnelle.",
        date : new Date(2022, 3, 15),
        imageUrl: ["assets/projet-4/Echec1.png", "assets/projet-4/Echec2.png", "assets/projet-4/Echec3.png","assets/projet-4/Echec4.png"],
        lienProjet: "https://github.com/Xamora64/EchecNSI",
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
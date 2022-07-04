import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetComponent } from './projet/projet.component';
import { ProjetsComponent } from './projets/projets.component';

const routes: Routes = [
  {path : '', component : AccueilComponent},
  {path : 'projets', component : ProjetsComponent},
  {path : 'projets/:id', component : ProjetComponent},
  {path : 'contact', component : ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

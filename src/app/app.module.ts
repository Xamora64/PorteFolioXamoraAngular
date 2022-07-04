import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeteComponent } from './tete/tete.component';
import { ProjetsComponent } from './projets/projets.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProjetResumeComponent } from './projet-resume/projet-resume.component';
import { ProjetComponent } from './projet/projet.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TeteComponent,
    AccueilComponent,
    ProjetsComponent,
    ProjetResumeComponent,
    ProjetComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

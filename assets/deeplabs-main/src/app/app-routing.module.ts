import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjetsComponent } from './projets/projets.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Page d'accueil
  { path: 'about', component: AboutComponent }, // Page "À propos"
  { path: 'projets', component: ProjetsComponent }, // Page "Projets"
  { path: 'skills', component: SkillsComponent }, // Page "Compétences"
  { path: 'contact', component: ContactComponent }, // Page "Contact"
  { path: 'chat', component: ChatbotComponent }, // Page "Contact"
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirige vers la page d'accueil si la route n'existe pas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  { path: 'inscrepition', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'accueil', component:AccueilComponent },
  { path: '', component: ConnexionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
}

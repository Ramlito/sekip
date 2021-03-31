import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {LpSolverTestComponent} from './lp-solver-test/lp-solver-test.component';
import {NouveauUtilisateurComponent} from './nouveau-utilisateur/nouveau-utilisateur.component';
import { JeuxComponent } from './jeux/jeux.component';
import { JeuxDetailsComponent } from './jeux/jeux-details.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'ro', component: LpSolverTestComponent},
  {path: 'newUser', component: NouveauUtilisateurComponent},
  {path: 'jeux', component: JeuxComponent},
  {path: 'jeux/:id', component: JeuxDetailsComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

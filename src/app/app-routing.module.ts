import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LpSolverTestComponent } from './lp-solver-test/lp-solver-test.component';
import { JeuxComponent } from './jeux/jeux.component';
import { JeuxDetailsComponent } from './jeux/jeux-details.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'ro', component: LpSolverTestComponent},
  {path: 'jeux', component: JeuxComponent},
  {path: 'jeux/:id', component: JeuxDetailsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

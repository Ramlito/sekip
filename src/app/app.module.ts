import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr';

import { PanelModule } from 'primeng/panel';
import { ListboxModule } from 'primeng/listbox';
import { TableModule } from 'primeng/table';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {NouveauUtilisateurComponent} from './nouveau-utilisateur/nouveau-utilisateur.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthentificationService} from './_services/authentification.service';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {registerLocaleData} from '@angular/common';
import {MomentModule} from 'ngx-moment';
import 'moment/locale/fr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JwtInterceptorService} from './_services/jwt-interceptor.service';
import { ProfileComponent } from './profile/profile.component';
import {UserService} from './_services/user.service';
import { LpSolverTestComponent } from './lp-solver-test/lp-solver-test.component';
import {MarkdownModule} from 'ngx-markdown';
import { JeuxComponent } from './jeux/jeux.component';
import { MessagesComponent } from './messages/messages.component';
import { JeuxDetailsComponent } from './jeux/jeux-details.component';
import {JeuService} from './jeux/jeu.service';
import {HomeComponent} from "./home/home.component";

import {ButtonModule} from 'primeng/button';


import { FormAjoutJeuComponent } from './forms/form-ajout-jeu/form-ajout-jeu.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';




registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    LpSolverTestComponent,
    HomeComponent,
    NouveauUtilisateurComponent,
    JeuxComponent,
    MessagesComponent,
    JeuxDetailsComponent,
    FormAjoutJeuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    MomentModule,
    MessagesModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    PanelModule,
    ListboxModule,
    DropdownModule,
    InputTextModule
  ],
  providers: [AuthentificationService, MessageService,
    {provide: LOCALE_ID, useValue: 'fr-FR'},
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    UserService, JeuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

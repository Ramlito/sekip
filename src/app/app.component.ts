import { Component } from '@angular/core';
import * as moment from 'moment';
import {MenuItem, MessageService} from 'primeng/api';
import {AuthentificationService} from './_services/authentification.service';
import {MessagesService} from '../app/messages/messages.service';
import {Jeu} from '../app/jeux/jeu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ludotheque-client';

  constructor(public messageService: MessageService, public authService: AuthentificationService) {
  }

  items: MenuItem[];
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.items = [{
      label: 'Accueil',
      icon: 'pi pi-home',
      routerLink: '/dashboard',
      routerLinkActiveOptions: { exact: true },
      command: () => {
        this.accueil();
      }
    },
      {
        label: 'Jeux',
        icon: 'pi pi-users',
        routerLink: '/jeux',
        routerLinkActiveOptions: {exact: true},
        command: () => {
          this.jeu();
        }
      },
    ];
  }
  accueil(): void {
    console.log('Accueil');
  }

  jeu(): void {
    console.log('Jeu');
  }

  show(): void {
    const now = moment().format('LL');
    this.messageService.add({
      key: 'main',
      severity: 'info',
      detail: `${this.title}, ${now}`,
    });
  }

  logout(): void {
    this.authService.logout();
  }

}

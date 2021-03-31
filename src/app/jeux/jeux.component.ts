import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Jeu} from './jeu';
import {JeuService} from './jeu.service';
import {MessagesService} from '../messages/messages.service';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {
  jeux: Observable<any>;
  mode = 0;
  icon = '';
  // tslint:disable-next-line:no-shadowed-variable
  constructor(public jeuService: JeuService/*, private messagesService: MessagesService*/) {
    // @ts-ignore
    /*this.messagesService.add('Liste jeux créée : ' + this.jeux.length);*/
  }

  jeux$: Observable<Jeu[]>;
  ngOnInit(): void {
    // @ts-ignore
    this.jeux = this.jeuService.getJeux();
    this.jeux$ = this.jeuService.getJeux();
  }

  // tslint:disable-next-line:typedef
  onTri() {
    console.log('Mode : ' + this.mode);
    this.mode++;
    // tslint:disable-next-line:triple-equals
    if (this.mode == 1) { // tri croissant par nom
      this.icon = 'pi pi-caret-up';
      this.jeux$ = this.jeuService.getJeux(1);
      // tslint:disable-next-line:triple-equals
    } else if (this.mode == 2) { // tri décroissant par note
      this.icon = 'pi pi-plus';
      this.jeux$ = this.jeuService.getJeux(1);
      // tslint:disable-next-line:triple-equals
    } else {  // liste de départ
      this.mode = 0;
      this.icon = 'pi pi-caret-down';
      this.jeux$ = this.jeuService.getJeux();
    }
  }
}

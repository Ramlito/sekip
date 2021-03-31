import {Component, OnInit, Type} from '@angular/core';
import {Observable} from 'rxjs';
import {Jeu} from './jeu';
import {JeuService} from './jeu.service';
import {MessagesService} from '../messages/messages.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {
  mode = 0;
  icon = '';
  // tslint:disable-next-line:no-shadowed-variable
  constructor(public JeuService: JeuService, private messagesService: MessagesService, private router: Router) {
    // @ts-ignore
    /*this.messagesService.add('Liste jeux créée : ' + this.jeux.length);*/
  }

  ngOnInit(): void {
    // @ts-ignore
    this.jeux$ = this.JeuService.getJeux();
  }

  goToAjout($myParam: string = ''): void {
    const navigationDetails: string[] = ['/ajout'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
}

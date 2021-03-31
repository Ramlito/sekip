import {Component, OnInit, Type} from '@angular/core';
import {Observable} from 'rxjs';
import {Jeu} from './jeu';
import {JeuService} from './jeu.service';
import {MessagesService} from '../messages/messages.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {
  jeux$: Observable<any>;
  mode = 0;
  icon = '';
  form: any = {
    filter: null,
  };
  formulaire = new FormGroup(  {filtre: new FormControl('', [Validators.required] )});
  // tslint:disable-next-line:no-shadowed-variable
  constructor(public JeuService: JeuService, private messagesService: MessagesService, private router: Router) {
    // @ts-ignore
    /*this.messagesService.add('Liste jeux créée : ' + this.jeux.length);*/
  }

  ngOnInit(): void {
    // @ts-ignore
    this.jeux = this.JeuService.getJeux();
    this.jeux$ = this.JeuService.getJeux();
  }

  onTri() {
    console.log('Mode : ' + this.mode);
    this.mode++;
    // tslint:disable-next-line:triple-equals
    if (this.mode == 1) { // tri croissant par nom
      this.icon = 'pi pi-caret-up';
      this.jeux$ = this.JeuService.getJeux(1);
      // tslint:disable-next-line:triple-equals
    } else if (this.mode == 2) { // tri décroissant par note
      this.icon = 'pi pi-plus';
      this.jeux$ = this.JeuService.getJeux(1);
      // tslint:disable-next-line:triple-equals
    } else {  // liste de départ
      this.mode = 0;
      this.icon = 'pi pi-caret-down';
      this.jeux$ = this.JeuService.getJeux();
    }
  }

  onFilterNbJ(){
    console.log(this.formulaire.value);
    this.jeux$ = this.JeuService.getJeuFilterNbJ(this.formulaire.value.filtre);
    this.jeux$.subscribe(value => console.log(value));
  }

  onFilterAge(){
    console.log(this.formulaire.value);
    this.jeux$ = this.JeuService.getJeuFilterAge(this.formulaire.value.filtre);
    this.jeux$.subscribe(value => console.log(value));
  }

  // tslint:disable-next-line:typedef

  goToAjout($myParam: string = ''): void {
    const navigationDetails: string[] = ['/ajout'];
    if ($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
}

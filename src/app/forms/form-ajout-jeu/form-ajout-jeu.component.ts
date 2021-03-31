import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Jeu} from '../../jeux/jeu';
import {MessageService} from 'primeng/api';
import {AuthentificationService} from '../../_services/authentification.service';
import {JeuService} from '../../jeux/jeu.service';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {first} from 'rxjs/operators';
import { Type } from '@angular/compiler';
import { Observable } from 'rxjs';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

// @ts-ignore
@Component({
  selector: 'app-form-ajout-jeu',
  templateUrl: './form-ajout-jeu.component.html',
  styleUrls: ['./form-ajout-jeu.component.css']
})

export class FormAjoutJeuComponent implements OnInit {
  [x: string]: any;

  private readonly apiUrl = 'http://localhost:8000/api';

  submitted = false;
  form: any = {
    id: null,
    nom: null,
    description: null,
    regles: null,
    langue: null,
    url_media: null,
    age: null,
    poids: null,
    nombre_joueurs: null,
    categorie: null,
    duree: null,
    theme: null,
    editeur: null
  };
  loading = false;
  returnUrl: string;
  error = '';

  formulaire = new FormGroup({
    nom: new FormControl(undefined, [Validators.required]),
    description: new FormControl(undefined, [Validators.required]),
    regles: new FormControl(undefined, [Validators.required]),
    langue: new FormControl(undefined, [Validators.required]),
    url_media: new FormControl(undefined, [Validators.required]),
    age: new FormControl(undefined, [Validators.required]),
    poids: new FormControl(undefined, [Validators.required]),
    nombre_joueurs: new FormControl(undefined, [Validators.required]),
    categorie: new FormControl(undefined, [Validators.required]),
    duree: new FormControl(undefined, [Validators.required]),
    theme: new FormControl(undefined, [Validators.required]),
    editeur: new FormControl(undefined, [Validators.required])
  });

  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private messageService: MessageService, private jeuService: JeuService, private authService: AuthentificationService, private router: Router,
              private route: ActivatedRoute) {
  }

  jeux: Jeu[];
    jeuxCopie: Jeu[];
    map: Map<number, Jeu>;
    getJeu(id: number): Observable<Type> {
        throw new Error('Method not implemented.');
    }
    getJeux(): Observable<Type> {
        throw new Error('Method not implemented.');
    }
  // tslint:disable-next-line:max-line-length
    addJeu(nom: string, description: string, regles: string, langue: string, urlMedia: string, age: number, poids: number, nombreJoueurs: number, categorie: string, duree: number): Observable<Jeu> {
        throw new Error('Method not implemented.');
    }

  @Input() jeu: Jeu;

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get nom(): AbstractControl{
    return this.formulaire.get('nom');
  }

  get description(): AbstractControl{
    return this.formulaire.get('description');
  }

  get regles(): AbstractControl{
    return this.formulaire.get('regles');
  }

  get langue(): AbstractControl{
    return this.formulaire.get('langue');
  }

  get urlMedia(): AbstractControl{
    return this.formulaire.get('url_media');
  }

  get age(): AbstractControl{
    return this.formulaire.get('age');
  }

  get poids(): AbstractControl{
    return this.formulaire.get('poids');
  }

  get nombreJoueurs(): AbstractControl{
    return this.formulaire.get('nombre_joueurs');
  }

  get categorie(): AbstractControl{
    return this.formulaire.get('categorie');
  }

  get duree(): AbstractControl{
    return this.formulaire.get('duree');
  }

  get theme(): AbstractControl{
    return this.formulaire.get('theme');
  }

  get editeur(): AbstractControl{
    return this.formulaire.get('editeur');
  }
// tslint:disable-next-line:typedef
  onSubmit() {
    this.form = this.formulaire.value;
    this.loading = true;
    // tslint:disable-next-line:max-line-length
    this.jeuService.addJeu(this.form.nom, this.form.description, this.form.editeur_id, this.form.theme_id, this.form.url_media, this.form.langue, this.form.age, this.form.poids, this.form.nombre_joueurs, this.form.duree, this.form.regles, this.form.categorie )
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate([this.returnUrl]);
          this.messageService.add({severity: 'info', summary: 'Création du nouveau jeu', detail: `Succès`, key: 'main'});
        },
        error => {
          console.log('Erreur: ', error);
          // this.error = error.error.data.values[0];
          this.loading = false;
          this.messageService.add({severity: 'error', summary: 'Erreur', detail: this.error, key: 'main'});
        }
      );

  }
}

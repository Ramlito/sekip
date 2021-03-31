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
    nombreJoueurs: null,
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
    poids: new FormControl(undefined, [Validators.required, Validators.min(0.1), Validators.max(5.0)]),
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
    addJeu(nom: string, description: string, regles: string, langue: string, url_media: string, age: number, poids: number, nombre_joueurs: number, categorie: string, duree: number): Observable<Jeu> {
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

  get url_media(): AbstractControl{
    return this.formulaire.get('url_media');
  }

  get age(): AbstractControl{
    return this.formulaire.get('age');
  }

  get poids(): AbstractControl{
    return this.formulaire.get('poids');
  }

  get nombre_joueurs(): AbstractControl{
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
  onSubmit(): void {
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    this.form = {...this.form, ...this.formulaire.value};
    this.loading = true;
    const uid = this.authService.userValue.id;
    this.http.post('http://localhost:8000/api/jeux', {
      nom: this.form.nom,
      description: this.form.description,
      theme: this.form.theme,
      editeur: this.form.editeur,
      langue: this.form.langue,
      age: this.form.age,
      poids: this.form.poids,
      nombre_joueurs: this.form.nombre_joueurs,
      categorie: this.form.categorie,
      duree: this.form.duree,
      regles: this.form.regles,
    }, httpOptions).subscribe(data => console.log(data));
    this.router.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Jeu} from '../../jeux/jeu';
import {JeuxDetailsComponent} from '../../jeux/jeux-details.component';

@Component({
  selector: 'app-form-ajout-jeu',
  templateUrl: './form-ajout-jeu.component.html',
  styleUrls: ['./form-ajout-jeu.component.css']
})
export class FormAjoutJeuComponent implements OnInit {

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
  });
  constructor() { }

  ngOnInit(): void {
  }

}

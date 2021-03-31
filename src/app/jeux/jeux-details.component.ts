import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JeuService} from './jeu.service';
import { Observable } from 'rxjs';
import {Type} from '@angular/compiler';
import {Jeu} from './jeu';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-jeux-details',
  template: `
    <div>
      <tr>
        <th>#</th>
        <th>Nom</th>
        <th>Description</th>
        <th>Thème</th>
        <th>Editeur</th>
        <th>URL Media</th>
        <th>Langue</th>
        <th>Âge</th>
        <th>Poids</th>
        <th>Nombre Joueurs</th>
        <th>Durée</th>
        <th>Catégorie</th>
        <th>Règles</th>
        <th>Note</th>
      </tr>
    </div>
    <div>
      <tr>
        <td>{{jeux.nom}}</td>
        <td>{{jeux.description}}</td>
        <td>{{jeux.regles}}</td>
        <td>{{jeux.langue}}</td>
        <td>{{jeux.url_media}}</td>
        <td>{{jeux.age}}</td>
        <td>{{jeux.poids}}</td>
        <td>{{jeux.nombre_joueurs}}</td>
        <td>{{jeux.categorie}}</td>
        <td>{{jeux.duree}}</td>
      </tr>
    </div>
  `,
  styles: [
  ],

})

export class JeuxDetailsComponent implements OnInit {
  id: number;
  jeu: Observable<Jeu>;
  jeux: Jeu;
  constructor(public route: ActivatedRoute, public jeuService: JeuService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.id = +this.route.snapshot.paramMap.get('id');
    this.jeuService.getJeu(this.id).subscribe(jeux => this.jeux = jeux);
    console.log(this.jeux);
  }
}

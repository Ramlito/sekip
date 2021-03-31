import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JeuService} from './jeu.service';
<<<<<<< HEAD
=======
import { Observable } from 'rxjs';
import {Type} from '@angular/compiler';
>>>>>>> ba78b4275ab39b0b02d51020c5b4e117e3295f0b
import {Jeu} from './jeu';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-jeux-details',
  template: `
<<<<<<< HEAD
    <div>
        <div *ngIf="jeu.id == id">
        <div class="p-d-flex p-flex-column">
          <div class="p-text-center" style="font-size: xx-large; font-weight: bold">Jeu</div>
          <div class="p-d-flex  p-flex p-jc-around">
            <div style="font-weight: bold">{{jeu.nom}}</div>
            <div style="font-weight: bold">{{jeu.description}}</div>
            <div style="font-weight: bold">{{jeu.regles}}</div>
            <div style="font-weight: bold">{{jeu.langue}}</div>
            <div style="font-weight: bold">{{jeu.url_media}}</div>
            <div style="font-weight: bold">{{jeu.age}}</div>
            <div style="font-weight: bold">{{jeu.poids}}</div>
            <div style="font-weight: bold">{{jeu.nombre_joueurs}}</div>
            <div style="font-weight: bold">{{jeu.categorie}}</div>
            <div style="font-weight: bold">{{jeu.duree}}</div>
            <div style="font-weight: bold">{{jeu.note}}</div>
          </div>
        </div>
      </div>
      <p> Jeu sélectionnée : {{id}} {{jeu.nom}}</p>
    </div>
  `,
  styles: [
  ],
=======
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
>>>>>>> ba78b4275ab39b0b02d51020c5b4e117e3295f0b
})

export class JeuxDetailsComponent implements OnInit {
  id: number;
<<<<<<< HEAD
  jeu: Jeu;
  constructor(public route: ActivatedRoute, public jeuxService: JeuService) { }
=======
  jeu: Observable<Jeu>;
  jeux: Jeu;
  constructor(public route: ActivatedRoute, public jeuService: JeuService) { }
>>>>>>> ba78b4275ab39b0b02d51020c5b4e117e3295f0b

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.id = +this.route.snapshot.paramMap.get('id');
<<<<<<< HEAD
    this.jeu = this.jeuxService.getJeu(this.id);
    console.log(this.jeu);
    console.log('Id depense :  ', id);
=======
    this.jeuService.getJeu(this.id).subscribe(jeux => this.jeux = jeux);
    console.log(this.jeux);
>>>>>>> ba78b4275ab39b0b02d51020c5b4e117e3295f0b
  }
}

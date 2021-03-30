import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JeuService} from './jeu.service';
import {Jeu} from './jeu';

// @ts-ignore
@Component({
  selector: 'app-jeux-details',
  template: `
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
          </div>
        </div>
      </div>
      <p> Jeu sélectionnée : {{id}} {{jeu.nom}}</p>
    </div>
  `,
  styles: [
  ],
})

export class JeuxDetailsComponent implements OnInit {
  id: number;
  jeu: Jeu;
  constructor(public route: ActivatedRoute, public jeuxService: JeuService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.id = +this.route.snapshot.paramMap.get('id');
    this.jeu = this.jeuxService.getJeu(this.id);
    console.log(this.jeu);
    console.log('Id depense :  ', id);
  }


}

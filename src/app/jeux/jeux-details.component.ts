import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JeuService} from './jeu.service';
import { Jeu } from './jeu';

// @ts-ignore
@Component({
  selector: 'app-jeux-details',
  styles: [
  ],
  template: `
    <div>
      <div class="p-d-flex p-flex-column">
        <div class="p-text-center" style="font-size: xx-large; font-weight: bold">Jeu</div>
        <div class="p-d-flex  p-flex p-jc-around">
          <div style="font-size: xxx-large; font-weight: bold">{{jeu.nom}}</div>
          <div style="font-size: xxx-large; font-weight: bold">{{jeu.description}}</div>
          <div style="font-size: xxx-large; font-weight: bold">{{jeu.regles}}</div>
          <div style="font-size: xxx-large; font-weight: bold">{{jeu.langue}}</div>
          <div style="font-size: xxx-large; font-weight: bold">{{jeu.url_media}}</div>
          <div style="font-size: xxx-large; font-weight: bold">{{jeu.age}}</div>
          <div style="font-size: xxx-large; font-weight: bold">{{jeu.poids}}</div>
          <div style="font-size: xxx-large; font-weight: bold">{{jeu.nombre_joueurs}}</div>
          <div style="font-size: xxx-large; font-weight: bold">{{jeu.categorie}}</div>
          <div style="font-size: xxx-large; font-weight: bold">{{jeu.duree}}</div>
        </div>
      </div>
    `,
})

export class JeuxDetailsComponent implements OnInit {
  id: number;
  jeu: Jeu;
  constructor(public route: ActivatedRoute, public jeuService: JeuService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.jeu = this.jeuService.getJeu(this.id);
    console.log(this.jeu);
  }


}

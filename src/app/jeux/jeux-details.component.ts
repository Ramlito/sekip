import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JeuService} from './jeu.service';
import { Jeu } from './jeu';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-jeux-details',
  template: `<div>
  <div class="p-d-flex p-flex-column">
    <div class="p-text-center" style="font-size: xx-large; font-weight: bold">Jeu</div>
    <div class="p-d-flex  p-flex p-jc-around">
      <div style="font-size: xxx-large; font-weight: bold">{{jeu.nom}}</div>
      <div style="font-size: xxx-large; font-weight: bold">{{jeu.id}}</div>
    </div>
    <p-table class="p-shadow-2 p-m-6 " [value]="jeu" [scrollable]="true" scrollHeight="400px">
      <ng-template pTemplate="header">
        <tr>
          <th>Description</th>
          <th>Règles</th>
          <th>Langue</th>
          <th>URL Media</th>
          <th>Âge</th>
          <th>Poids</th>
          <th>Nombre Joueurs</th>
          <th>Catégories</th>
          <th>Durée</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-jeux>
        <tr>
          <td>{{jeux.description}}</td>
          <td>{{jeux.rules}}</td>
          <td>{{jeux.language}}</td>
          <td>{{jeux.url}}</td>
          <td>{{jeux.age}}</td>
          <td>{{jeux.weight}}</td>
          <td>{{jeux.nombre_joueurs}}</td>
          <td>{{jeux.categories}}</td>
          <td>{{jeux.duration}}</td>
          <td>
            <button type="button" pButton pRipple icon="pi pi-pencil" [routerLink]="['/jeux', jeux.id]"></button>
          </td>
        </tr>
      </ng-template>
    </p-table>
  </div>
</div>
`,
  styleUrls: ['./jeux-details.component.css'],
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

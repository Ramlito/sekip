import { Component, OnInit } from '@angular/core';
import {Jeu} from './jeu';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {
  jeux: Jeu[];
  mode = 0;
  icon = ``;

  constructor() { }

  ngOnInit(): void {

  }

}

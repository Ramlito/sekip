import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../_services/authentification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthentificationService) { }

  ngOnInit(): void {
  }

}

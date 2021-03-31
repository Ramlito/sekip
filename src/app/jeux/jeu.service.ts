import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, pipe, throwError} from 'rxjs';
import {catchError, map, shareReplay, tap} from 'rxjs/operators';
import {Jeu} from './jeu';
import {MessagesService} from '../messages/messages.service';
import {Type} from '@angular/compiler';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({ providedIn: 'root' })
export class JeuService {
  private readonly apiUrl = 'http://localhost:8000/api';
  jeux: Jeu[];
  map: Map<number, Jeu>;

  constructor(private http: HttpClient, private messagesService: MessagesService) {
  }

  getJeu(id: number): Observable<Jeu> {
    return this.http.get<any>(environment.apiUrl + '/jeux/' + id, httpOptions)
      .pipe(
        map(rep => rep.data.item),
        tap(val => console.log(val)),
        catchError(err => throwError(err))
      );
  }
  // @ts-ignore
  getJeux(): Observable<Type> {
    return this.http.get<any>(environment.apiUrl + '/jeux', httpOptions)
      .pipe(
        map(rep => rep.data.item),
        catchError(err => throwError(err))
      );
  }

  // tslint:disable-next-line:max-line-length
  addJeu(nom: string, description: string, regles: string, langue: string, url_media: string, age: number, poids: number, nombre_joueurs: number, categorie: string, duree: number, theme: string, editeur: string): Observable<Jeu> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<any>(environment.apiUrl + '/jeux', {nom, description, theme, editeur, url_media, langue, age, poids, nombre_joueurs, duree, regles, categorie}, httpOptions)
      .pipe(
        tap(rep => console.log(rep)),
        map(rep => {
          const jeu = {...rep.data.value};
          console.log('Ajout jeu : ', jeu);
          return jeu;
        }),
        shareReplay(),
        catchError(err => {
          console.log(err);
          return throwError('bug');
        }));
  }
  }

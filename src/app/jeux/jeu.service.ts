import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, shareReplay, tap} from 'rxjs/operators';
import {Jeu} from './jeu';
import {Datas} from './jeux-data';

import {MessagesService} from '../messages/messages.service';
import {Type} from '@angular/compiler';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
@Injectable({providedIn: 'root'})
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
  getJeux(sort?: number): Observable<Jeu[]> {
    if (sort === undefined) {
      const url = 'http://localhost:8000/api/jeux';
      return this.http.get<any>(url, httpOptions)
        .pipe(
          map(res => res.data.item),
          tap(body => console.log(' **http** ', body))
        );
    }
    if (sort > 0) {
      const url = 'http://localhost:8000/api/jeux?sort=nom';
      return this.http.get<any>(url, httpOptions)
        .pipe(
          map(res => res.data.item),
          tap(body => console.log(' **http** ', body)),
          catchError(err => {
            console.log(err);
            return throwError('bug');
          }));
    }
    if (sort < 0) {
      const url = 'http://localhost:8000/api/jeux?sort=note';
      return this.http.get<any>(url, httpOptions)
        .pipe(
          map(res => res.data.item),
          tap(body => console.log(' **http** ', body)),
          catchError(err => {
            console.log(err);
            return throwError('bug');
          }));
    }
  }

  /*sortData(sort: Sort): any {
    const data = this.jeux.slice();
    if (!sort.active || sort.direction === '') {
      this.jeux = data;
      return;
    }
    this.jeux = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'nom': return this.compare(a.nom, b.nom, isAsc);
        case 'theme': return this.compare(a.theme_id.nom, b.theme_id.nom, isAsc);
        case 'description': return this.compare(a.description, b.description, isAsc);
        case 'joueurs': return this.compare(a.nombre_joueurs, b.nombre_joueurs, isAsc);
        case 'age': return this.compare(a.age, b.age, isAsc);
        default: return 0;
      }
    });
  }*/


// @ts-ignore

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



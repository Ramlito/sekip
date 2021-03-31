import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, map, retry, shareReplay, tap} from 'rxjs/operators';
import {Jeu} from './jeu';
import {Datas} from './jeux-data';
import {MessageService} from 'primeng/api';
import {MessagesService} from '../messages/messages.service';
import {environment} from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class JeuService {
  private readonly apiUrl = 'http://localhost:8000/api';
  jeux: Jeu[];
  jeuxCopie: Jeu[];
  map = new Map();

  constructor(private http: HttpClient, private messagesService: MessagesService) {
    /*this.jeux = Datas.getInstance().genereJeux();
    this.jeuxCopie = this.jeux.slice();
    this.map = new Map();
    this.jeux.forEach ((x: Jeu) => this.map.set(x.id, x));*/
  }
  getJeu(id: number): Jeu {
    return this.map.get(id);
  }
  // @ts-ignore
  getJeux(sort?: number): Observable<Jeu[]> {
    /*if (sort === undefined) { return this.jeux; }
    if (sort > 0) { return this.jeuxCopie.sort((x: Jeu , y: Jeu): number => x.nom > y.nom ? 1 : -1); }
    if (sort < 0) { return this.jeuxCopie.sort((x: Jeu , y: Jeu): number => y.nom > x.nom ? 1 : -1); }
    if (sort === 0) { return this.jeuxCopie.sort((x: Jeu , y: Jeu): number => y.id > x.id ? 1 : -1); }*/
    const params = '';
    const url = `${this.apiUrl}/jeux${params}`;
    return this.http.get<any>(url, httpOptions)
      .pipe(
        map(res => res.data.item),
        tap(body => console.log(' **http** ', body))
      );
  }

  addJeu(jeux: Jeu): void {
    this.http.post(environment.apiUrl + '/jeux', {
      nom: jeux.nom,
      description: jeux.description,
      regles: jeux.regles,
      langue: jeux.langue,
      url_media: jeux.url_media,
      age: jeux.age,
      poids: jeux.poids,
      nombre_joueurs: jeux.nombre_joueurs,
      categorie: jeux.categorie,
      duree: jeux.duree,
    }, httpOptions).pipe(
      tap(rep => console.log(rep)),
      shareReplay(),
      catchError(err => {
        return throwError(err);
        // return of('');
      }));
  }

}

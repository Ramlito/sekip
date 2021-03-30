import { Injectable } from '@angular/core';
import {Jeu} from './jeu';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:class-name
export class jeuService {
  private readonly apiUrl = 'http://localhost:8000/api';
  jeux: Jeu[];
  jeuxCopie: Jeu[];
  map: Map<number, Jeu>;
  constructor(private http: HttpClient) {
    /*this.jeux = Datas.getInstance().generejeux();*/
    this.jeuxCopie = this.jeux.slice();
    this.map = new Map();
    this.jeux.forEach ((x: Jeu) => this.map.set(x.id, x));
  }
  getJeu(id: number): Jeu {
    return this.map.get(id);
  }
  getJeux(sort?: number): Jeu[] {
    if (sort === undefined) { return this.jeux; }
    if (sort > 0) { return this.jeuxCopie.sort((x: Jeu , y: Jeu): number => x.nom > y.nom ? 1 : -1); }
    if (sort < 0) { return this.jeuxCopie.sort((x: Jeu , y: Jeu): number => y.nom > x.nom ? 1 : -1); }
    if (sort === 0) { return this.jeuxCopie.sort((x: Jeu , y: Jeu): number => y.id > x.id ? 1 : -1); }
  }

  getJeuxObs(sort?: number): Observable<Jeu[]> {
    const params = (!!sort ? (+sort === -1 ? '?sort=nom&ordre=desc' : '?sort=nom') : '');
    const url = `${this.apiUrl}/jeux${params}`;
    // const url = 'http://localhost:8000/api/jeux';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.get<any>(url, httpOptions)
      .pipe(
        map(res => res.data.item),
        tap(body => console.log(' **http** ', body))
      );
  }
}

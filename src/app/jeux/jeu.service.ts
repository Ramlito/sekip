import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Jeu} from './jeu';
import {Datas} from './jeux-data';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class JeuService {
  private readonly apiUrl = 'http://localhost:8000/api';
  jeux: Jeu[];
  jeuxCopie: Jeu[];
  map: Map<number, Jeu>;

  constructor(private http: HttpClient) {
  }
  getJeu(id: number): Jeu {
    return this.map.get(id);
  }

  getJeux(): Jeu[] {
    return this.jeux;
  }
  // @ts-ignore
  /*getJeux(sort?: number): Jeu[] {
    if (sort === undefined) { return this.jeux; }
    if (sort > 0) { return this.jeuxCopie.sort((x: Jeu , y: Jeu): number => x.nom > y.nom ? 1 : -1); }
    if (sort < 0) { return this.jeuxCopie.sort((x: Jeu , y: Jeu): number => y.nom > x.nom ? 1 : -1); }
    if (sort === 0) { return this.jeuxCopie.sort((x: Jeu , y: Jeu): number => y.id > x.id ? 1 : -1); }
  }*/

  getJeuxObs(): Observable<Jeu[]> {
    const url = 'http://localhost:8000/api/jeux';
    return this.http.get<any>(url, httpOptions)
      .pipe(
        map(res => res.data.item),
        tap(body => console.log(' **http** ', body))
      );
  }

}

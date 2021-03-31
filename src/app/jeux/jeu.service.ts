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
  // @ts-ignore
  getJeux(sort?: number): Jeu[] {
    const data = this.jeux;
    if (sort === undefined) { this.jeux = data;
                              return; }
    if (sort > 0) { return this.jeux = data.sort((x: Jeu , y: Jeu): number => x.nom > y.nom ? 1 : -1); }
    if (sort < 0) { return this.jeux = data.sort((x: Jeu , y: Jeu): number => y.nom > x.nom ? 1 : -1); }
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

  getJeuxObs(): Observable<Jeu[]> {
    const url = 'http://localhost:8000/api/jeux';
    return this.http.get<any>(url, httpOptions)
      .pipe(
        map(res => res.data.item),
        tap(body => console.log(' **http** ', body))
      );
  }

}

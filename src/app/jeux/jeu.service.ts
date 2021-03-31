import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Jeu} from './jeu';
import {Datas} from './jeux-data';
import {MessageService} from 'primeng/api';
import {MessagesService} from '../messages/messages.service';
import {Type} from '@angular/compiler';
import {environment} from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class JeuService {
  private readonly apiUrl = 'http://localhost:8000/api';
  jeux: Jeu[];
  jeuxCopie: Jeu[];
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

}

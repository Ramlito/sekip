import {Jeu} from './jeu';
import * as faker from 'faker';


export class Datas {
  private static instance: Datas;
  private static idP = 1;
  private static idD = 1;


  private constructor() {

  }

  public static getInstance(): Datas {
    if (Datas.instance === undefined) {
      Datas.instance = new Datas();
    }
    return Datas.instance;
  }

  public genereJeux(): Jeu[] {
    const jeux = [];
    faker.setLocale('fr');
    const jeu = {
      id: faker.name.id(),
      nom: faker.name.nom(),
      description: faker.name.description(),
      regles: faker.name.regles(),
      langue: faker.name.langue(),
      url_media: faker.name.url_media(),
      age: faker.name.age(),
      poids: faker.name.poids(),
      nombre_joueurs: faker.name.poids(),
      categorie: faker.name.categorie(),
      duree: faker.name.duree()
    };
    jeux.push(jeu);
    return jeux;
  }
}

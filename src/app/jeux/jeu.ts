export interface Jeu {
  id: number;
  nom: string;
  description: string;
  url_media: string;
  langue: string;
  age: number;
  poids: number;
  nombre_joueurs: number;
  duree: number;
  regles: string;
  categorie: string;
  userId: number;
  themeId: number;
  editeurId: number;
}

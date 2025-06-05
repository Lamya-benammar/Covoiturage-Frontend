import { Commentaire } from './commentaire.model';

export interface Trajet {
  id: number;
  conducteur: string;
  depart: string;
  destination: string;
  date: string;        
  heure: string;      
  nbPlaces: number;
  vu: number;
   user: {
    id: number;
    email: string;
  };         
  commentaires?: Commentaire[]; 
}

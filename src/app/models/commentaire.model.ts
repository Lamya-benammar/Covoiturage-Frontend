export interface Commentaire {
  id: number;
  contenu: string;
  dateCreation: string;  // ou Date si tu veux
  trajetId?: number;     // optionnel, si utile
  user: {
    id: number;
    email: string;
  };
}

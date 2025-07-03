export interface User {
  id: number;
  email: string;
  firstname?: string;
  lastname?: string;
  phone?:string;
}

export interface Vehicule {
  id : number;
  immatricule: string;
  marque: string;
}

export interface Trajet {
  id?: number;
  depart: string;
  destination: string;
  date: string;
  heure: string;
  nbPlaces: number;
  prix: number;
  etat: string;
  conducteur?: any;
  vu?: boolean;
  vehicule?: any;
  typeAnnonce?: string;
}

/*
export interface Trajet {
  id: number;
   conducteur: {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    role: ''
  },
  depart: string;
  destination: string;
  date: string;  
  heure: string;  
  nbPlaces: number;
  typeAnnonce:string;
}*/
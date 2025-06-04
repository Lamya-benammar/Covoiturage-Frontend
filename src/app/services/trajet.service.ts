// trajet.service.ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Trajet {
  id: number;
  conducteur: string;
  depart: string;
  destination: string;
  date: string;   // iso date string
  heure: string;  // time string
  nbPlaces: number;
}

@Injectable({
  providedIn: 'root'
})
export class TrajetService {

  private apiUrl = 'http://localhost:8080/api/trajets'; // adapte l'URL selon ton backend

  constructor(private http: HttpClient) {}

  getTrajets(): Observable<Trajet[]> {
    return this.http.get<Trajet[]>(this.apiUrl);
  }
  getAllTrajets(): Observable<Trajet[]> {
    return this.http.get<Trajet[]>(this.apiUrl);
  }

 searchTrajets(depart: string, destination: string, date: string, nbPassagers: number): Observable<Trajet[]> {
  const params: any = {
    depart,
    destination,
    date,
    nbPassagers
  };

   return this.http.get<Trajet[]>(`${this.apiUrl}/search`, { params });
}

}

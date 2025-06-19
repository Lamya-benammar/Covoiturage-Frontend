// trajet.service.ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Trajet {
  id: number;
  conducteur: string;
  depart: string;
  destination: string;
  date: string;  
  heure: string;  
  nbPlaces: number;
}

@Injectable({
  providedIn: 'root'
})
export class TrajetService {

  private apiUrl = 'http://localhost:8080/api/trajets'; 

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
  incrementerVu(trajetId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${trajetId}/increment-vu`, {});
  }
 
  reserverPlace(id: number) {
    return this.http.post(`${this.apiUrl}/${id}/reserver`, {}); 
  }
    createTrajet(trajet: any): Observable<any> {
    return this.http.post(this.apiUrl, trajet);
  }
}

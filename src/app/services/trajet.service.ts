// trajet.service.ts
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trajet } from '../models/trajet.model';

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
 
 reserverPlace(id: number, email: string) {
  return this.http.post(
    `${this.apiUrl}/${id}/reserver?clientName=${email}`,
    {},
    { responseType: 'text' }
  );
}


 createTrajet(userId: number, vehiculeId: number, trajetData: any): Observable<Trajet> {
  const url = `${this.apiUrl}/${userId}/vehicules/${vehiculeId}`;
  return this.http.post<Trajet>(url, trajetData);
}

    getTrajetsByUser(userId: number): Observable<Trajet[]> {
    return this.http.get<Trajet[]>(`${this.apiUrl}/user/${userId}`);
  }

  deleteTrajet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateTrajet(id: number, trajet: Trajet): Observable<Trajet> {
    return this.http.put<Trajet>(`${this.apiUrl}/${id}`, trajet);
  }
}

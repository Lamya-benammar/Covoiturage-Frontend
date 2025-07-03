import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicule } from '../models/vehicule.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  private apiUrl = 'http://localhost:8080/api/vehicules';

  constructor(private http: HttpClient) {}

getVehiculeByUserId(userId: number): Observable<Vehicule[]> {
  return this.http.get<Vehicule[]>(`${this.apiUrl}/user/${userId}`);
}

 deleteVehicule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  addVehicule(userId: number, vehicule: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/user/${userId}`, vehicule);
}
updateVehicule(userId: number, vehicule: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/user/${userId}`, vehicule);
}
}

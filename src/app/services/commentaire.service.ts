import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from '../models/commentaire.model'; // adapte le chemin selon ta structure


@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private apiUrl = 'http://localhost:8080/api/trajets'; 

  constructor(private http: HttpClient) {}

  getCommentairesByTrajetId(trajetId: number): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.apiUrl}/${trajetId}/commentaire`);
  }
}
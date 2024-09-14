import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateurs'; // Import du modèle utilisateur (si tu en as un)

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseUrl = 'http://localhost:9000/api/utilisateurs'; // URL de l'API backend

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste des utilisateurs
  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.baseUrl}/all`);
  }

  // Méthode pour créer un utilisateur
  createUtilisateur(utilisateur: Utilisateur): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, utilisateur);
  }

  // Méthode pour supprimer un utilisateur
  deleteUtilisateur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}

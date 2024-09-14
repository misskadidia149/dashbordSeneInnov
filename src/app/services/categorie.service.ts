import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie'; // Assure-toi d'avoir un modèle pour les catégories

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private baseUrl = 'http://localhost:9000/api/categories'; // URL de l'API backend

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste des catégories
  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.baseUrl}/all`);
  }

  // Méthode pour créer une catégorie
  createCategorie(categorie: Categorie): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, categorie);
  }

  // Méthode pour supprimer une catégorie
  deleteCategorie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}

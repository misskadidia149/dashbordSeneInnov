import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../models/categorie'; // Assure-toi d'avoir un modèle pour les catégories

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  env = environment;

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste des catégories
  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.env.api}` + `/api/category/read`);
  }

     //Creation d'une categorie
     Creer(file: any, titre: any, description: any): Observable<any> {
      const dat: FormData = new FormData();
      dat.append('file', file);
      let categorie = [{
        "titre": titre,
        "description": description
      }]
      console.log(categorie);
      dat.append('data', JSON.stringify(categorie).slice(1, JSON.stringify(categorie).lastIndexOf(']')));
        return this.http.post(`${this.env.api}/api/category/create/new`, dat);
    }

     //La fonction pour supprimer
     Delete(id:Number):Observable<any>{
      return this.http.delete(`${this.env.api}/api/category/delete/${id}`);
    }

          // Details d'une specialite
          detail(id: number): Observable<Categorie> {
            return this.http.get<Categorie>(`${this.env.api}` + `/api/category/get/${id}`);
          }

          Update(file: any, titre: any, description: any, id:number): Observable<any> {
            const dat: FormData = new FormData();
            dat.append('file', file);
            let Cat = [{
              "titre": titre,
              "description": description,
            }]
            console.log(Cat)
            dat.append('data', JSON.stringify(Cat).slice(1, JSON.stringify(Cat).lastIndexOf(']')));
            return this.http.put(`${this.env.api}/api/category/update/${id}`, dat);
          }
        

}

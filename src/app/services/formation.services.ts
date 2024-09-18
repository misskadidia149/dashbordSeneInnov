import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Formation } from '../models/formation';
import { StorageService } from './storage.services';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  env = environment;

  constructor(private http: HttpClient, private storage: StorageService) { }

  // Méthode pour récupérer la liste des catégories
  getAllFormation(): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${this.env.api}` + `/api/formation/read`);
  }

    //  //Creation d'une categorie
     Creer(file: any, titre: any, subtitle: any, instructeur: any, description: any, idCat:any,): Observable<any> {
      const dat: FormData = new FormData();
      dat.append('file', file);
      let formation =  [{
        "title": titre,
        "subtitle": subtitle,
        "instructeur": instructeur,
        "description": description,
      }]

      const currentUser = this.storage.getUser();
      console.log("current => "+currentUser.id);

      console.log(formation);
      dat.append('data', JSON.stringify(formation).slice(1, JSON.stringify(formation).lastIndexOf(']')));
        return this.http.post(`${this.env.api}/api/formation/create/new/${idCat}/${currentUser.id}`, dat);
    }

     //La fonction pour supprimer
     Delete(id:Number):Observable<any>{
      return this.http.delete(`${this.env.api}/api/formation/delete/${id}`);
    }

          // Details d'une formation
          detail(id: number): Observable<Formation> {
            return this.http.get<Formation>(`${this.env.api}` + `/api/formation/get/${id}`);
          }

          Update(file: any, title: any, subtitle: any, description: any, instructeur:any, id:number): Observable<any> {
            const dat: FormData = new FormData();
            dat.append('file', file);
            let Formation = [{
              "title": title,
              "subtitle": subtitle,
              "description": description,
              "instructeur": instructeur,
            }]
            console.log(Formation)
            dat.append('data', JSON.stringify(Formation).slice(1, JSON.stringify(Formation).lastIndexOf(']')));
            return this.http.put(`${this.env.api}/api/formation/update/${id}`, dat);
          }
        

}

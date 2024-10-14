import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notifications } from 'src/app/models/notification';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  env = environment;

  constructor(private http: HttpClient) { }

  getNotificationDESC(): Observable<Notifications[]> {
    return this.http.get<Notifications[]>(`${this.env.api}` + `/api/notification/readLast`);
  }
  getNotificationLIMIT3(): Observable<Notifications[]> {
    return this.http.get<Notifications[]>(`${this.env.api}` + `/api/notification/readThreeLast`);
  }
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DgUser } from './models/dg-user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DgUserService {
  private configUrl = 'assets/mock-data/user.json';
  constructor(private http: HttpClient) { }

  getUser(): Observable<DgUser> {
    return this.http.get<DgUser>(this.configUrl);
  }
}

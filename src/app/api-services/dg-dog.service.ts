import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DgDog } from '../models/dg-dog';

@Injectable({
  providedIn: 'root'
})
export class DgDogService {
  private configUrl = 'assets/mock-data/dogs.json';
  constructor(private http: HttpClient) { }

  getDogs(): Observable<DgDog[]> {
    return this.http.get<DgDog[]>(this.configUrl);
  }
}

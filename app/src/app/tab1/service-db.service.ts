import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publication } from '../models/publication';

@Injectable({
  providedIn: 'root'
})
export class ServiceDbService {

  constructor(private http:HttpClient) {}

  loadPublications () : Observable<Publication[]> {
    return this.http.get<Publication[]>('http://localhost:3030/publications');
  }

  sendPublication (publication) : Observable<any> {
    console.log(publication);
    return this.http.post<any>('http://localhost:3030/publication', {id: 1});
  }
}

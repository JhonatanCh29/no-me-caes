import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tutores } from '../models/tutores';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutoresService {
  private apiUrl = 'http://localhost:8080/api/tutores';
  constructor(private http:HttpClient) { }
  
  getTutores(): Observable<Tutores[]> {
    return this.http.get<Tutores[]>(this.apiUrl);
  }

  getTutoresById(id: number): Observable<Tutores> {
    return this.http.get<Tutores>(`${this.apiUrl}/${id}`);
  }

  createTutores(tutores: Tutores): Observable<Tutores> {
    return this.http.post<Tutores>(this.apiUrl, tutores);
  }

  updateTutores(tutores: Tutores, id: number): Observable<Tutores> {
    return this.http.put<Tutores>(`${this.apiUrl}/${id}`, tutores);
  }

  deleteTutores(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}

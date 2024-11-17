import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Practicante } from '../models/practicante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticanteService {
  private apiUrl = 'http://localhost:8080/api/practicante';
  constructor(private http:HttpClient) { }

  getPracticante(): Observable<Practicante[]> {
    return this.http.get<Practicante[]>(this.apiUrl);
  }

  getPracticanteById(id: number): Observable<Practicante> {
    return this.http.get<Practicante>(`${this.apiUrl}/${id}`);
  }

  createPracticante(practicante: Practicante): Observable<Practicante> {
    return this.http.post<Practicante>(this.apiUrl, practicante);
  }

  updatePracticante(practicante: Practicante, id: number): Observable<Practicante> {
    return this.http.put<Practicante>(`${this.apiUrl}/${id}`, practicante);
  }

  deletePracticante(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

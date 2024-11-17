import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escuelaprof } from '../models/escuelaprof';

@Injectable({
  providedIn: 'root'
})
export class EscuelaprofService {
  private apiUrl = 'http://localhost:8080/api/Escuela';

  constructor(private http: HttpClient) {}

  getEscuelasByFacultad(facultadId: number): Observable<Escuelaprof[]> {
    return this.http.get<Escuelaprof[]>(`${this.apiUrl}/facultad/${facultadId}`);
  }
  
  getEscuela(): Observable<Escuelaprof[]> {
    return this.http.get<Escuelaprof[]>(this.apiUrl);
  }

  getEscuelaById(id: number): Observable<Escuelaprof> {
    return this.http.get<Escuelaprof>(`${this.apiUrl}/${id}`);
  }

  createEscuela(escuelaProfesional: Escuelaprof): Observable<Escuelaprof> {
    return this.http.post<Escuelaprof>(this.apiUrl, escuelaProfesional);
  }

  updateEscuela(escuelaProfesional: Escuelaprof, id: number): Observable<Escuelaprof> {
    return this.http.put<Escuelaprof>(`${this.apiUrl}/${id}`, escuelaProfesional);
  }

  deleteEscuela(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facultad } from '../models/facultad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  private apiUrl = 'http://localhost:8080/api/facultad';

  constructor(private http: HttpClient) {}
  getFacultadesByCampus(campusId: number): Observable<Facultad[]> {
    return this.http.get<Facultad[]>(`${this.apiUrl}/campus/${campusId}`);
  }

  getFacultades(): Observable<Facultad[]> {
    return this.http.get<Facultad[]>(this.apiUrl);
  }

  getFacultadById(id: number): Observable<Facultad> {
    return this.http.get<Facultad>(`${this.apiUrl}/${id}`);
  }

  createFacultad(facultad: Facultad): Observable<Facultad> {
    return this.http.post<Facultad>(this.apiUrl, facultad);
  }

  updateFacultad(facultad: Facultad, id: number): Observable<Facultad> {
    return this.http.put<Facultad>(`${this.apiUrl}/${id}`, facultad);
  }

  deleteFacultad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

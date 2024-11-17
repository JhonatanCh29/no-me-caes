import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Linea } from '../models/linea';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineaService {
  private apiUrl = 'http://localhost:8080/api/linea';
  constructor(private http:HttpClient) { }

  getLinea(): Observable<Linea[]> {
    return this.http.get<Linea[]>(this.apiUrl);
  }

  getLineaById(id: number): Observable<Linea> {
    return this.http.get<Linea>(`${this.apiUrl}/${id}`);
  }

  createLinea(linea: Linea): Observable<Linea> {
    return this.http.post<Linea>(this.apiUrl, linea);
  }

  updateLinea(linea: Linea, id: number): Observable<Linea> {
    return this.http.put<Linea>(`${this.apiUrl}/${id}`, linea);
  }

  deleteLinea(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RutinaEjercicio } from '../../models/rutinaEjercicio';

@Injectable({
  providedIn: 'root'
})
export class RutinaEjercicioService {

  private apiURL = 'http://localhost:8080/api/rutina-ejercicio';

  token = localStorage.getItem('token') || '';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })
  };

  constructor(private http: HttpClient) { }

  getRutinaEjercicio() {
    return this.http.get(this.apiURL, this.httpOptions);
  }

  postRutinaEjercicio(rutinaEjercicio:RutinaEjercicio) {
    return this.http.post(this.apiURL, rutinaEjercicio, this.httpOptions);
  }

  putRutinaEjercicio(rutinaEjercicio:RutinaEjercicio) {
    return this.http.put(this.apiURL, rutinaEjercicio, this.httpOptions);
  }

  deleteRutinaEjercicio() {
    return this.http.delete(this.apiURL, this.httpOptions);
  }
}

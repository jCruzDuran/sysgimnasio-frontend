import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Descripcionejercicio } from 'src/models/descripcionejercicio';

@Injectable({
  providedIn: 'root'
})
export class DescripcionejercicioService {

  private apiURL = 'http://localhost:8080/api/descripcionEjercicio';

  token = localStorage.getItem('token') || '';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })
  };

  constructor(private http: HttpClient) { }

  getDescripcionejercicio() {
    return this.http.get(this.apiURL, this.httpOptions);
  }

  postDescripcionejercicio(descripcionEjercicio:Descripcionejercicio) {
    return this.http.post(this.apiURL, descripcionEjercicio, this.httpOptions);
  }

  putDescripcionejercicio(descripcionEjercicio:Descripcionejercicio) {
    return this.http.put(this.apiURL, descripcionEjercicio, this.httpOptions);
  }

  deleteDescripcionejercicio() {
    return this.http.delete(this.apiURL, this.httpOptions);
  }
}

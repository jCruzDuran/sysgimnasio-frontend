import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rutina } from 'src/models/rutina';

@Injectable({
  providedIn: 'root'
})
export class RutinasService {

  private apiURL = 'http://localhost:8080/api/rutinas';

  token = localStorage.getItem('token') || '';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })
  };

  constructor(private http: HttpClient) { }

  getPlanes() {
    return this.http.get(this.apiURL, this.httpOptions);
  }

  postPlanes(rutina:Rutina) {
    return this.http.post(this.apiURL, rutina, this.httpOptions);
  }

  putPlanes(rutina:Rutina) {
    return this.http.put(this.apiURL, rutina, this.httpOptions);
  }

  deletePlanes() {
    return this.http.delete(this.apiURL, this.httpOptions);
  }

}

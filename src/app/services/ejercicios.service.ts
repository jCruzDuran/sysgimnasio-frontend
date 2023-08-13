import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ejercicio } from 'src/models/ejercicio';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

  private apiURL = 'http://localhost:8080/api/ejercicios';

  token = localStorage.getItem('token') || '';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })
  };

  constructor(private http: HttpClient) { }

  getEjercicios() {
    return this.http.get(this.apiURL, this.httpOptions);
  }

  postEjercicios(ejercicio:Ejercicio) {
    return this.http.post(this.apiURL, ejercicio, this.httpOptions);
  }

  putEjercicios(ejercicio:Ejercicio) {
    return this.http.put(this.apiURL, ejercicio, this.httpOptions);
  }

  deleteEjercicios() {
    return this.http.delete(this.apiURL, this.httpOptions);
  }

}
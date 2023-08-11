import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  private apiURL = 'http://localhost:8080/api/planes';

  constructor(private http: HttpClient) { }

  token = localStorage.getItem('token') || '';

  getPlanes() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };

    return this.http.get(this.apiURL, httpOptions);
  }
}
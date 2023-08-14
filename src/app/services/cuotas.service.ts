import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuota } from 'src/models/cuota';

@Injectable({
  providedIn: 'root'
})
export class CuotasService {

  private apiURL = 'http://localhost:8080/api/cuotas';

  token = localStorage.getItem('token') || '';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })
  };

  constructor(private http: HttpClient) { }

  getCuotas() {
    return this.http.get(this.apiURL, this.httpOptions);
  }

  postCuotas(cuota:Cuota) {
    return this.http.post(this.apiURL, cuota, this.httpOptions);
  }

  putCuotas(cuota:Cuota) {
    return this.http.put(this.apiURL, cuota, this.httpOptions);
  }

  deleteCuotas() {
    return this.http.delete(this.apiURL, this.httpOptions);
  }

}

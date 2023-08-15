import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plan } from 'src/models/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  private apiURL = 'http://localhost:8080/api/planes';

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

  postPlanes(plan:Plan) {
    return this.http.post(this.apiURL, plan, this.httpOptions);
  }

  putPlanes(plan:Plan) {
    return this.http.put(this.apiURL, plan, this.httpOptions);
  }

  deletePlanes(idPlan: number) {
    const url = `${this.apiURL}/${idPlan}`;
    return this.http.delete(url, this.httpOptions);
  }

}

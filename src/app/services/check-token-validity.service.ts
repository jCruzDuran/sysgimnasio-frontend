import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckTokenValidityService {

  private apiUrl = "http://localhost:8080/api/check-token"

  constructor(private http:HttpClient) { }

  checkTokenValidity(token:string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<boolean>(this.apiUrl, {headers})
  }
}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiURL = 'http://localhost:8080/api/usuarios';

  token = localStorage.getItem('token') || '';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })
  };

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(this.apiURL, this.httpOptions);
  }

  postUsuarios(usuario:Usuario) {
    return this.http.post(this.apiURL, usuario, this.httpOptions);
  }

  putUsuarios(usuario:Usuario) {
    return this.http.put(this.apiURL, usuario, this.httpOptions);
  }

  deleteUsuarios(idUsuario: number) {
    const url = `${this.apiURL}/${idUsuario}`;
    return this.http.delete(url, this.httpOptions);
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = 'http://localhost:5113/api/login'; // Cambia esto por tu URL del API
  private apiUrlRegister = 'http://localhost:5113/api/registro';

  constructor(private http: HttpClient) { }

  // Método para hacer login
  login(email: string, contrasena: string): Observable<any> {
    const body = { Correo: email, Contrasena: contrasena };
    return this.http.post<any>(this.apiURL, body);
  }

  register(user: any): Observable<any> {
    return this.http.post(this.apiUrlRegister, user);
  }
}

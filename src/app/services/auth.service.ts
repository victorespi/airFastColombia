import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = 'http://localhost:5113/api/login'; // Cambia esto por tu URL del API
  private apiUrlRegister = 'http://localhost:5113/api/registro';
  private apiUrlUpdateProfile = 'http://localhost:5113/api/editar-perfil';
  private userType: number | null = null;

  constructor(private http: HttpClient) { }

  // Método para hacer login
  login(email: string, contrasena: string): Observable<any> {
    const body = { Correo: email, Contrasena: contrasena };
    return this.http.post<any>(this.apiURL, body);
  }

  register(user: any): Observable<any> {
    return this.http.post(this.apiUrlRegister, user);
  }

  updateProfile(id: string, profileData: any): Observable<any> {
    const url = `http://localhost:5113/api/editar-perfil?id=${id}`;
    return this.http.patch(url, profileData);
  }

  // Establecer el tipo de usuario después del login
  setUserType(userType: number) {
    this.userType = userType;
    localStorage.setItem('userType', userType.toString());
  }

  // Obtener el tipo de usuario
  getUserType(): number | null {
    const storedUserType = localStorage.getItem('userType');
    return storedUserType ? parseInt(storedUserType, 10) : null;
  }

  // Verificar roles
  isRoot(): boolean {
    return this.getUserType() === 1;
  }

  isAdmin(): boolean {
    return this.getUserType() === 2;
  }

  isClient(): boolean {
    return this.getUserType() === 3;
  }

  // Método para limpiar datos de usuario
  logout() {
    localStorage.removeItem('userType');
    this.userType = null;
  }
}

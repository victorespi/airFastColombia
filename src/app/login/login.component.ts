import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Aquí puedes añadir la lógica de autenticación real
    if (this.email === 'usuario@example.com' && this.password === '123456') {
      // Redirigir a la página de editar perfil si la autenticación es correcta
      this.router.navigate(['/editar-perfil']);
    } else {
      alert('Credenciales incorrectas. Por favor, intente de nuevo.');
    }
  }
}

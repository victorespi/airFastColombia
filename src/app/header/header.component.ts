
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showLoginMenu = false; // Controla la visibilidad del menú de login
  email: string = '';     // Guarda el email ingresado por el usuario
  password: string = '';  // Guarda la contraseña ingresada
  isLoggedIn: boolean = false; // Controla si el usuario está autenticado

  constructor(private router: Router) {}

  login() {
    if (this.email === 'usuario@example.com' && this.password === '123456') {
      this.isLoggedIn = true; // El usuario está logueado
      this.router.navigate(['/header']);
      alert('Credenciales correctas');
      this.toggleLoginMenu();
    } else {
      alert('Credenciales incorrectas. Por favor, intente de nuevo.');
    }
  }

  toggleLoginMenu() {
    this.showLoginMenu = !this.showLoginMenu;
    const userMenu = document.getElementById('user-menu');
    if (userMenu) {
      userMenu.classList.toggle('active', this.showLoginMenu);
    }
  }

  // Método para cerrar la sesión (opcional)
  logout() {
    this.isLoggedIn = false;
    this.email = '';
    this.password = '';
  }
}


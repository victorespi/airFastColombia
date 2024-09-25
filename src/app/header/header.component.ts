import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,  // Hacemos el componente standalone
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
 // Propiedad para controlar la visibilidad del menú de inicio de sesión
  showLoginMenu: boolean = false;

   // Método para alternar la visibilidad del menú
  toggleLoginMenu() {
     this.showLoginMenu = !this.showLoginMenu;
}
}


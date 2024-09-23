import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EditarPerfilComponent } from './editarperfil/editar-perfil.component'; // Importa el componente

export const routes: Routes = [
  {
    path: 'app-login', 
    component: LoginComponent // Ruta para la página de inicio de sesión
  },
  {
    path: 'editar-perfil', 
    component: EditarPerfilComponent // Nueva ruta para el formulario de "Editar Perfil"
  }
];



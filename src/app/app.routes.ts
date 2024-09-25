import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EditarPerfilComponent } from './editarperfil/editar-perfil.component';

export const routes: Routes = [
  {
    path: 'app-login', // Ruta principal (raíz)
    component: LoginComponent // Componente de inicio de sesión
  },
  {
    path: 'editar-perfil', // Ruta para editar el perfil
    component: EditarPerfilComponent // Componente del formulario de edición de perfil
  }
];




import { Routes } from '@angular/router';
import { EditarPerfilComponent } from './editarperfil/editar-perfil.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './Home/home.component';
import { RegisterComponent } from './Register/register.component';

export const routes: Routes = [
  {
    path: 'header', // Ruta principal (raíz)
    component: HeaderComponent // Componente de inicio de sesión
  },
  {
    path: 'home', // Nueva ruta para el componente Home
    component: HomeComponent
  },
    {
      path: 'register',
      loadComponent: () => import('./Register/register.component').then(m => m.RegisterComponent), // Importa el componente de manera dinámica
    },
  {
    path: '', // Ruta por defecto (redirección a la página Home)
    redirectTo: 'home',
    pathMatch: 'full'
  }

];




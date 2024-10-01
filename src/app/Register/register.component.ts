import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = '';
  username: string = '';
  password: string = '';
  documento: string = '';
  nombre: string = '';
  apellido: string = '';
  fecha_nacimiento: string = '';
  lugar_nacimiento: string = '';
  direccion: string = '';
  genero: number = 1; // 1 para hombre, 2 para mujer
  notis: boolean = false;
  id_tipo: number = 3; // Siempre 3 (cliente)
  estado: boolean = true; // Siempre true

  onSubmit() {
    const user = {
      email: this.email,
      username: this.username,
      password: this.password,
      documento: this.documento,
      nombre: this.nombre,
      apellido: this.apellido,
      fecha_nacimiento: this.fecha_nacimiento,
      lugar_nacimiento: this.lugar_nacimiento,
      direccion: this.direccion,
      genero: this.genero,
      notis: this.notis,
      id_tipo: this.id_tipo,
      estado: this.estado
    };

    console.log('Formulario enviado', user);
  }
}


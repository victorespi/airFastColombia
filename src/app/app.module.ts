import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; 

@NgModule({
  declarations: [
    AppComponent, // Aquí ya no va RegisterComponent porque es standalone
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]), // Aquí van las rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


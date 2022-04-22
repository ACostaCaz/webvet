import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FotoComponent } from './foto/foto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
<<<<<<< HEAD
import { AddHistoriaComponent } from './add-historia/add-historia.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, EmpleadosComponent, EmpleadoComponent, FotoComponent, PaginaPrincipalComponent, AddHistoriaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
=======
import { RegistrarseSoftwareComponent } from './registrarse-software/registrarse-software.component';
import { HeaderSoftwareComponent } from './header-software/header-software.component';
import { ContactarComponent } from './contactar/contactar.component';
import { CondicionesComponent } from './condiciones/condiciones.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, EmpleadosComponent, EmpleadoComponent, FotoComponent, 
  PaginaPrincipalComponent, RegistrarseSoftwareComponent, HeaderSoftwareComponent, ContactarComponent, CondicionesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,],
>>>>>>> e1f131785962792f4dca8bad49bcd0977263bd3b
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}

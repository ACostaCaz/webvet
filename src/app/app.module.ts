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
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, EmpleadosComponent, EmpleadoComponent, FotoComponent, PaginaPrincipalComponent, AddProductComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
=======
import { AddHistoriaComponent } from './add-historia/add-historia.component';
import { RegistrarseSoftwareComponent } from './registrarse-software/registrarse-software.component';
import { HeaderSoftwareComponent } from './header-software/header-software.component';
import { ContactarComponent } from './contactar/contactar.component';
import { CondicionesComponent } from './condiciones/condiciones.component';
import { PagarComponent } from './pagar/pagar.component';



@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, EmpleadosComponent, EmpleadoComponent, FotoComponent, 
  PaginaPrincipalComponent, RegistrarseSoftwareComponent, HeaderSoftwareComponent, ContactarComponent, CondicionesComponent, 
  AddHistoriaComponent, PagarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,],
>>>>>>> b5b2e5b4c1240cbefc6c84917af044c1b15fc0fc
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}

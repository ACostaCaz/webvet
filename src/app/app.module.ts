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
import { AddHistoriaComponent } from './add-historia/add-historia.component';
import { AddServiciosComponent } from './add-servicios/add-servicios.component';
import { RegistrarseSoftwareComponent } from './registrarse-software/registrarse-software.component';
import { HeaderSoftwareComponent } from './header-software/header-software.component';
import { ContactarComponent } from './contactar/contactar.component';
import { CondicionesComponent } from './condiciones/condiciones.component';
import { PagarComponent } from './pagar/pagar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ModProductComponent } from './mod-product/mod-product.component';
import { HistorialServiciosComponent } from './historial-servicios/historial-servicios.component';
import { InventarioClinicaComponent } from './inventario-clinica/inventario-clinica.component';
import { DataService } from './data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({

  
  declarations: [AppComponent, LoginComponent, RegisterComponent, EmpleadosComponent, EmpleadoComponent, FotoComponent, 
    PaginaPrincipalComponent, AddHistoriaComponent, AddServiciosComponent, RegistrarseSoftwareComponent, 
    HeaderSoftwareComponent, ContactarComponent, CondicionesComponent, PagarComponent, AddProductComponent, ModProductComponent, HistorialServiciosComponent, InventarioClinicaComponent],

  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, FormsModule, HttpClientModule, InMemoryWebApiModule.forRoot(DataService)],

  providers: [CookieService],
  bootstrap: [AppComponent],
  })

export class AppModule {}


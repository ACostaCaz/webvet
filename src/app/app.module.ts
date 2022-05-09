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
import { RegistrarseSoftwareComponent } from './registrarse-software/registrarse-software.component';
import { HeaderSoftwareComponent } from './header-software/header-software.component';
import { ContactarComponent } from './contactar/contactar.component';
import { CondicionesComponent } from './condiciones/condiciones.component';
import { AddProductoComponent } from './add-product/add-product.component';
import { ModProductComponent } from './mod-product/mod-product.component';
import { AddServiciosComponent } from './add-servicios/add-servicios.component';
import { GestionInventarioComponent } from './gestion-inventario/gestion-inventario.component';
import { HistorialServiciosComponent } from './historial-servicios/historial-servicios.component';
import { InventarioClinicaComponent } from './inventario-clinica/inventario-clinica.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PoliticaYPrivacidadComponent } from './politica-y-privacidad/politica-y-privacidad.component';
import { NavComponent } from './nav/nav.component';
import { authInterceptorProviders } from 'src/helpers/auth.interceptor';
import { HistoriaMedicaPacienteComponent } from './historia-medica-paciente/historia-medica-paciente.component';
import { AddEmpleadoComponent } from './add-empleado/add-empleado.component';
import { ModificarEmpleadoComponent } from './modificar-empleado/modificar-empleado.component';
import { GestionarFacturasComponent } from './gestionar-facturas/gestionar-facturas.component';
import { AddFacturasComponent } from './add-facturas/add-facturas.component';
import { MostrarAnimalesComponent } from './mostrar-animales/mostrar-animales.component';



@NgModule({

  
  declarations: [AppComponent, LoginComponent, RegisterComponent, EmpleadosComponent, EmpleadoComponent, FotoComponent, 
    PaginaPrincipalComponent, AddHistoriaComponent, AddServiciosComponent, RegistrarseSoftwareComponent, GestionInventarioComponent,
    HeaderSoftwareComponent, ContactarComponent, CondicionesComponent, AddProductoComponent, ModProductComponent, HistorialServiciosComponent, 
    InventarioClinicaComponent, PoliticaYPrivacidadComponent, NavComponent, HistoriaMedicaPacienteComponent, AddEmpleadoComponent, ModificarEmpleadoComponent, GestionarFacturasComponent, AddFacturasComponent, MostrarAnimalesComponent,],

  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, FormsModule, HttpClientModule,],

  providers: [CookieService, authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}


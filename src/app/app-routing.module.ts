import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddHistoriaComponent } from './add-historia/add-historia.component';
import { ModificarEmpleadoComponent } from './modificar-empleado/modificar-empleado.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { RegistrarseSoftwareComponent } from './registrarse-software/registrarse-software.component';
import { ContactarComponent } from './contactar/contactar.component';
import { CondicionesComponent } from './condiciones/condiciones.component';
import { AddServiciosComponent } from './add-servicios/add-servicios.component';
import { AddProductoComponent } from './add-product/add-product.component';
import { ModProductComponent } from './mod-product/mod-product.component';
import { HistorialServiciosComponent } from './historial-servicios/historial-servicios.component';
import { InventarioClinicaComponent } from './inventario-clinica/inventario-clinica.component';
import { GestionInventarioComponent } from './gestion-inventario/gestion-inventario.component';
import { PoliticaYPrivacidadComponent } from './politica-y-privacidad/politica-y-privacidad.component';
import { HistoriaMedicaPacienteComponent } from './historia-medica-paciente/historia-medica-paciente.component';
import { AddEmpleadoComponent } from './add-empleado/add-empleado.component';
import { AddFacturasComponent } from './add-facturas/add-facturas.component';
import { GestionarFacturasComponent } from './gestionar-facturas/gestionar-facturas.component';
import { MostrarAnimalesComponent } from './mostrar-animales/mostrar-animales.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'addhistoria', component: AddHistoriaComponent, pathMatch: 'full' },
  { path: 'modificar-empleado', component: ModificarEmpleadoComponent, pathMatch: 'full' },
  { path: 'empleados', component: EmpleadosComponent, pathMatch: 'full' },
  { path: '', component: PaginaPrincipalComponent, pathMatch: 'full' },
  { path: 'registrarse', component: RegistrarseSoftwareComponent, pathMatch: 'full' },
  { path: 'contactar', component: ContactarComponent, pathMatch: 'full' },
  { path: 'condiciones', component: CondicionesComponent, pathMatch: 'full' },
  { path: 'addServicios', component: AddServiciosComponent, pathMatch: 'full' },
  { path: 'addproduct', component: AddProductoComponent, pathMatch: 'full'},
  { path: 'modproduct', component: ModProductComponent, pathMatch: 'full'},
  { path: 'servicios', component: HistorialServiciosComponent, pathMatch: 'full'},
  { path: 'inventarioClinica', component: InventarioClinicaComponent, pathMatch: 'full'},
  { path: 'inventario', component: GestionInventarioComponent, pathMatch: 'full'},
  { path: 'politica-y-privacidad', component: PoliticaYPrivacidadComponent, pathMatch: 'full'},
  { path: 'historial', component: HistoriaMedicaPacienteComponent, pathMatch: 'full'},
  { path: 'addEmpleado', component: AddEmpleadoComponent, pathMatch: 'full'},
  { path: 'addFactura', component: AddFacturasComponent, pathMatch: 'full'},
  { path: 'historialFacturas', component: GestionarFacturasComponent, pathMatch: 'full'},
  { path: 'mostrarAnimales', component: MostrarAnimalesComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

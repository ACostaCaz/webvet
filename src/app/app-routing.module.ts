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
import { AddProductComponent } from './add-product/add-product.component';
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
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { FichaAnimalComponent } from './ficha-animal/ficha-animal.component';
import { MostrarCitasComponent } from './mostrar-citas/mostrar-citas.component';
import { AddCitasComponent } from './add-citas/add-citas.component'; 
import { AdminGuard } from './guard/admin.guard';
import { VetGuard } from './guard/vet.guard';
import { UserGuard } from './guard/user.guard';




const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'addhistoria', component: AddHistoriaComponent, pathMatch: 'full', canActivate:[VetGuard] },
  { path: 'modificar-empleado', component: ModificarEmpleadoComponent, pathMatch: 'full', canActivate:[AdminGuard] },
  { path: 'empleados', component: EmpleadosComponent, pathMatch: 'full', canActivate:[AdminGuard] },
  { path: '', component: PaginaPrincipalComponent, pathMatch: 'full' },
  { path: 'registrarse', component: RegistrarseSoftwareComponent, pathMatch: 'full' },
  { path: 'contactar', component: ContactarComponent, pathMatch: 'full' },
  { path: 'condiciones', component: CondicionesComponent, pathMatch: 'full' },
  { path: 'addServicios', component: AddServiciosComponent, pathMatch: 'full', canActivate:[AdminGuard]},
  { path: 'addproduct', component: AddProductComponent, pathMatch: 'full', canActivate:[AdminGuard]},
  { path: 'modproduct', component: ModProductComponent, pathMatch: 'full', canActivate:[UserGuard]},
  { path: 'servicios', component: HistorialServiciosComponent, pathMatch: 'full', canActivate:[UserGuard]},
  { path: 'inventarioClinica', component: InventarioClinicaComponent, pathMatch: 'full', canActivate:[UserGuard]},
  { path: 'inventario', component: GestionInventarioComponent, pathMatch: 'full'}, //ELIMINAR; NO ES NADA
  { path: 'politica-y-privacidad', component: PoliticaYPrivacidadComponent, pathMatch: 'full'},
  { path: 'historial', component: HistoriaMedicaPacienteComponent, pathMatch: 'full'},
  { path: 'addEmpleado', component: AddEmpleadoComponent, pathMatch: 'full', canActivate:[AdminGuard]},
  { path: 'addFactura', component: AddFacturasComponent, pathMatch: 'full', canActivate:[UserGuard]},
  { path: 'historialFacturas', component: GestionarFacturasComponent, pathMatch: 'full', canActivate:[UserGuard]},
  { path: 'mostrarAnimales', component: MostrarAnimalesComponent, pathMatch: 'full', canActivate:[VetGuard]},
  { path: 'addAnimal', component: AddAnimalComponent, pathMatch: 'full', canActivate:[VetGuard]},
  { path: 'fichaAnimal/:id', component: FichaAnimalComponent, pathMatch: 'full', canActivate:[VetGuard]},
  { path: 'citas', component: MostrarCitasComponent, pathMatch: 'full', canActivate:[VetGuard]},
  { path: 'addCitas', component: AddCitasComponent, pathMatch: 'full', canActivate:[VetGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

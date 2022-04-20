import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HistoriaMedicaComponent } from './historia-medica/historia-medica.component';
import { AddHistoriaComponent } from './add-historia/add-historia.component';
import { AddEmpleadosComponent } from './add-empleados/add-empleados.component';
import { ModificarEmpleadosComponent } from './modificar-empleados/modificar-empleados.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'historia', component: HistoriaMedicaComponent, pathMatch: 'full' },
  { path: 'addhistoria', component: AddHistoriaComponent, pathMatch: 'full' },
  { path: 'addempleados', component: AddEmpleadosComponent, pathMatch: 'full' },
  { path: 'modempleados', component: ModificarEmpleadosComponent, pathMatch: 'full' },
  { path: 'empleados', component: EmpleadosComponent, pathMatch: 'full' },
  { path: 'home', component: PaginaPrincipalComponent, pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

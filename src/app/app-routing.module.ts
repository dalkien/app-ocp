import { CargaComponent } from './Modules/novedades/carga/carga.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Modules/home/home/home.component';
import { EmpleadosComponent } from './Modules/empleados/empleados/empleados.component';
import { CargaMasivaComponent } from './Modules/empleados/carga-masiva/carga-masiva.component';
import { OtrasNovedadesComponent } from './Modules/novedades/otras-novedades/otras-novedades.component';
import { LandingComponent } from './Modules/home/landing/landing.component';
import { NuevoProyectoComponent } from './Modules/proyectos/nuevo-proyecto/nuevo-proyecto.component';
import { ListaProyectosComponent } from './Modules/proyectos/lista-proyectos/lista-proyectos.component';
import { NuevaNovedadComponent } from './Modules/novedades/nueva-novedad/nueva-novedad.component';
import { DnfComponent } from './Modules/dnf/dnf/dnf.component';
import { ListaNovedadesComponent } from './Modules/novedades/lista-novedades/lista-novedades.component';
import { NuevoEmpleadoComponent } from './Modules/empleados/nuevo-empleado/nuevo-empleado.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  // EMPLEADOS
  { path: 'home/empleados', component: EmpleadosComponent },
  { path: 'home/empleados/nuevo', component: NuevoEmpleadoComponent },
  { path: 'home/empleados/carga-masiva', component: CargaMasivaComponent },
  // NOVEDADES
  { path: 'home/novedades/nueva', component: NuevaNovedadComponent },
  { path: 'home/novedades/carga', component: CargaComponent},
  { path: 'home/novedades/novedades', component: ListaNovedadesComponent },
  { path: 'home/novedades/otras-nov', component: OtrasNovedadesComponent },
  // PROYECTOS
  { path: 'home/proyectos/lista', component: ListaProyectosComponent },
  { path: 'home/proyectos/nuevo', component: NuevoProyectoComponent },
  // DNF
  { path: 'home/dnf/generar', component: DnfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

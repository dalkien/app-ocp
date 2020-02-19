import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { CargaMasivaComponent } from './carga-masiva/carga-masiva.component';
import { ListaComponent } from './lista/lista.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NovedadesComponent } from './novedades/novedades.component';
import { OtrasNovedadesComponent } from './otras-novedades/otras-novedades.component';

@NgModule({
  declarations: [EmpleadosComponent, NuevoComponent, CargaMasivaComponent, ListaComponent, NovedadesComponent, OtrasNovedadesComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    EmpleadosComponent
  ]
})
export class EmpleadosModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './empleados/empleados.component';
import { CargaMasivaComponent } from './carga-masiva/carga-masiva.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { CamposEmpleadoComponent } from './campos-empleado/campos-empleado.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VerEmpleadoComponent } from './ver-empleado/ver-empleado.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { NuevoEmpleadoComponent } from './nuevo-empleado/nuevo-empleado.component';
import { InactivarEmpleadoComponent } from './inactivar-empleado/inactivar-empleado.component';

@NgModule({
  declarations: [
    EmpleadosComponent,
    CargaMasivaComponent,
    EditarEmpleadoComponent,
    CamposEmpleadoComponent,
    VerEmpleadoComponent,
    ListaEmpleadosComponent,
    NuevoEmpleadoComponent,
    InactivarEmpleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
  ],
  exports: [
    EmpleadosComponent
  ]
})
export class EmpleadosModule { }

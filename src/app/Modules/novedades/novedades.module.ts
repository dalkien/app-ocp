import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovedadesComponent } from './novedades/novedades.component';
import { OtrasNovedadesComponent } from './otras-novedades/otras-novedades.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NuevaNovedadComponent } from './nueva-novedad/nueva-novedad.component';
import { CamposNovedadComponent } from './campos-novedad/campos-novedad.component';
import { FormsModule } from '@angular/forms';
import { ListaNovedadesComponent } from './lista-novedades/lista-novedades.component';
import { VerNovedadComponent } from './ver-novedad/ver-novedad.component';
import { CargaComponent } from './carga/carga.component';

@NgModule({
  declarations: [NovedadesComponent,
    OtrasNovedadesComponent,
    NuevaNovedadComponent,
    CamposNovedadComponent,
    ListaNovedadesComponent,
    VerNovedadComponent,
    CargaComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    NovedadesComponent
  ]
})
export class NovedadesModule { }

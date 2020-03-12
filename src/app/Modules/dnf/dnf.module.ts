import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DnfComponent } from './dnf/dnf.component';
import { ListaProyectoComponent } from './lista-proyecto/lista-proyecto.component';
import { DatosProyectoComponent } from './datos-proyecto/datos-proyecto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DnfComponent, ListaProyectoComponent, DatosProyectoComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [
    DnfComponent,
  ]
})
export class DnfModule { }

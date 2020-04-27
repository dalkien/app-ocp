import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './Modules/home/home.module';
import { EmpleadosModule } from './Modules/empleados/empleados.module';
import { ProyectosModule } from './Modules/proyectos/proyectos.module';
import { NovedadesModule } from './Modules/novedades/novedades.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DnfModule } from './Modules/dnf/dnf.module';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    EmpleadosModule,
    ProyectosModule,
    NovedadesModule,
    DnfModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

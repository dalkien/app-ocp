import { NovedadesOcpService } from './../../servicios/novedades-ocp.service';
import { Component, OnInit } from '@angular/core';
import { NovedadResponse } from 'src/app/Model/novedad';

@Component({
  selector: 'app-lista-novedades',
  templateUrl: './lista-novedades.component.html',
  styleUrls: ['./lista-novedades.component.css']
})
export class ListaNovedadesComponent implements OnInit {

  listaNovedades: NovedadResponse[]; 
  consultaNovedad:  NovedadResponse; 
  constructor( private servicio: NovedadesOcpService) { }

  ngOnInit() {
    
    this.servicio.getNovedadesMes("2020","4").subscribe((data) =>   { 
      this.listaNovedades = data as NovedadResponse[]
      //; console.log(JSON.stringify(this.listaNovedades))
    });
  }

  consNove(nov: NovedadResponse){
    this.consultaNovedad = nov;
  }
}

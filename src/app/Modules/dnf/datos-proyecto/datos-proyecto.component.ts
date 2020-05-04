import { subparametros } from './../../servicios/parametros-ocp.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Proyecto, proyectoReal } from 'src/app/Model/proyecto';

@Component({
  selector: 'app-datos-proyecto',
  templateUrl: './datos-proyecto.component.html',
  styleUrls: ['./datos-proyecto.component.css']
})
export class DatosProyectoComponent implements OnInit {

  @Input() Proyecto: proyectoReal;
  @Input() datosProyecto:  subparametros;
  @Input() listaDatos: string[];
  @Output() DatosEnviados = new EventEmitter<string>();
  CodProyecto = '';
  botonGenerar = { texto: 'Generar', estado: true };

  constructor() { }

  ngOnInit() {
  }

  data(){
    console.log(this.listaDatos);
  }

  cambiarProyecto() {
    this.Proyecto = undefined;
    this.CodProyecto = '';
    this.DatosEnviados.emit(this.CodProyecto);
    this.botonGenerar.texto = 'Generar';
    this.botonGenerar.estado = true;
  }

  GenerarDNF() {
    this.botonGenerar.texto = 'Generando...';
    this.botonGenerar.estado = false;
  }

}

import { ExcelService } from './../../servicios/excel.service';

import { GetEmpleados, EmpleadoReal } from 'src/app/Model/empleado';
import { OcpEmpleadosService } from './../../servicios/ocp-empleados.service';
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
  allRecursos: GetEmpleados; 
  asigna:boolean = false;
  recursos: EmpleadoReal[]; 
  seleccionado: EmpleadoReal[] = [];
  adicional: number;
  adicionado: EmpleadoReal;
  CodProyecto = '';
  botonGenerar = { texto: 'Generar', estado: true };

  constructor( private emplServ: OcpEmpleadosService, private excelService: ExcelService) { }

  ngOnInit() {
    this.emplServ.getAllEmployedsDNF()
    .subscribe((data) => {this.allRecursos = data as GetEmpleados;
      this.recursos = this.allRecursos.empleados;
    })
  }

  data(){
    console.log(this.listaDatos);
  }

  addRecurso(){
    this.asigna = true;
  }

  asignaRecurso(r: string){
    let rec : EmpleadoReal = this.recursos.find((x) => x.codEmpleado === parseInt(r));
    this.adicionado = rec; 
    this.seleccionado.push(rec);
    //console.log(JSON.stringify(this.adicionado)) ;
    this.asigna = false;
    if(this.seleccionado.length > 0){
      this.botonGenerar.estado = true;
    }
    document.getElementById("activarRecurso").click();
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
    this.excelService.exportAsExcelFile(this.recursos, 'sample');
  }

}

import { NovedadResponse, novBhe, novIncLin, novOtro } from 'src/app/Model/novedad';
import { NovedadesOcpService } from './../../servicios/novedades-ocp.service';
import { proyectoReal } from 'src/app/Model/proyecto';
import { async } from '@angular/core/testing';
import { EmpleadoReal } from 'src/app/Model/empleado';
import { Component, OnInit, Input, OnChanges,SimpleChange, Output, EventEmitter } from '@angular/core';
import { DatosProyectoComponent } from '../datos-proyecto/datos-proyecto.component';
import { Dnf, EmpleadoInfo } from 'src/app/Model/dnf';

@Component({
  selector: 'app-lista-recursos',
  templateUrl: './lista-recursos.component.html',
  styleUrls: ['./lista-recursos.component.css']
})
export class ListaRecursosComponent implements OnInit {

  asigna: EmpleadoReal; 
  @Input() recursos: EmpleadoReal[]=[];
  @Input() infPor:  proyectoReal; 
  recursos2 :EmpleadoReal[] = [];
  verInfo: boolean = false;
  proyec: proyectoReal;
  ubicacion: string; 
  otrasObserv: string; 
  tarifaXper:number =0;
  ingHoras:number =0;
  costHoras:number =0;
  totalHR:number =0;
  otrosCost:number =0;
  listaNovedades: NovedadResponse[];
  novBhe: novBhe[];
  novIncLin: novIncLin[];
  novOtro: novOtro[];
  dnfDatos: Dnf;
  simmpleDnf: EmpleadoInfo[] = [];

  totEquipo  : number =0;
  totHorIng  : number =0;
  totIngr    : number =0;
  totCosHor  : number =0;
  totBonos   : number =0;
  totHE      : number =0;
  totHHRR    : number =0;
  totCosOtros: number =0;

  @Output() salDnf = new EventEmitter<Dnf>();
  constructor(private servicio: NovedadesOcpService) { }


  ngOnChanges(changes: SimpleChange): void {
      console.log("cambio"); 
  }

  ngOnInit() {
    this.servicio.getNovedadesMes("2020","4").subscribe((data) =>   { 
      this.listaNovedades = data as NovedadResponse[]; 
      //; console.log(JSON.stringify(this.listaNovedades))
    });
  }

  almacenaRecurso(r: EmpleadoReal){
    
    this.listaNovedades.forEach((x) => {
      if(x.codigo === r.codEmpleado){ 
      this.novBhe = x.novBhes; //.filter((y) => y.codEmpleado === r.codEmpleado);
      this.novIncLin = x.novIncLins;  //.filter((a) => a.codEmpleado === r.codEmpleado);
      this.novOtro = x.novOtros ; //.filter((b) => b.codEmpleado === r.codEmpleado); 
    }
    });
    debugger;
    let datos :  EmpleadoInfo = {
      empleado: r, 
      noveBhes: this.novBhe, 
      novIncLins: this.novIncLin,
      novOtros: this.novOtro,
      ubicacion: "", 
      tarifaXper: 0,
      ingHoras: 0,
      costHoras: 0,
      totalHR: 0,
      otrosCost: 0,
      otrasObserv: ""
    }
    this.simmpleDnf.push(datos);
    this.recursos.forEach((x)=> console.log(x.codEmpleado));
    this.salDnf.emit(this.dnfDatos);
  }
  
}

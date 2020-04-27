import { Component, OnInit } from '@angular/core';
import { Empleado, GetEmpleados, EmpleadoReal } from 'src/app/Model/empleado';
import { OcpEmpleadosService } from '../../servicios/ocp-empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados :  Partial<EmpleadoReal> [] ;

  empleadoSeleccionado: EmpleadoReal ={"beneficio":0,"cedula":0,"codEmpleado":0,"costoEstMes":0,"descuento":"","equipo":0,"fecCargue": new Date ,"fehcaIngrero":new Date,"ingRet":"","nombres":"","observaciones":"","rol":"","salario":0,"salarioTotal":0,"tipoContrato":"","tipoSalario":"","usuario":""} ;

  employeds  : GetEmpleados; 

  constructor(private servicios: OcpEmpleadosService  ) { }

  ngOnInit() {
    this.servicios.getAllEmployeds();
  }

  valList(){
    this.employeds = this.servicios.getList();
    if(this.employeds != undefined){
      this.empleados = this.employeds.empleados;
      return true;
    }else{
      return false;
    }
  }

  verEmpleado(e: EmpleadoReal): void {
    this.empleadoSeleccionado = e;
  }
  
  valSelec(){
    if(this.empleadoSeleccionado != undefined){
      return true; 
    }else{
      return true; 
    }
  }

}

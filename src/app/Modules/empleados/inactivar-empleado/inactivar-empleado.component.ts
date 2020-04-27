import { Component, OnInit, Input } from '@angular/core';
import { Empleado, EmpleadoReal } from 'src/app/Model/empleado';

@Component({
  selector: 'app-inactivar-empleado',
  templateUrl: './inactivar-empleado.component.html',
  styleUrls: ['./inactivar-empleado.component.css']
})
export class InactivarEmpleadoComponent implements OnInit {

  @Input() empleado: EmpleadoReal;

  emplpoyed : EmpleadoReal ={"beneficio":0,"cedula":0,"codEmpleado":0,"costoEstMes":0,"descuento":"","equipo":0,"fecCargue": new Date ,"fehcaIngrero":new Date,"ingRet":"","nombres":"","observaciones":"","rol":"","salario":0,"salarioTotal":0,"tipoContrato":"","tipoSalario":"","usuario":""};
  constructor() { }

  ngOnInit() {
    this.emplpoyed = this.empleado;
  }

}

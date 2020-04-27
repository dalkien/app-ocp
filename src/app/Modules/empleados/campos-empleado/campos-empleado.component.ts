import { Component, OnInit, Input } from '@angular/core';
import { Empleado, EmpleadoReal } from 'src/app/Model/empleado';
import { OcpEmpleadosService } from '../../servicios/ocp-empleados.service';

@Component({
  selector: 'app-campos-empleado',
  templateUrl: './campos-empleado.component.html',
  styleUrls: ['./campos-empleado.component.css']
})
export class CamposEmpleadoComponent implements OnInit {

  @Input() empleado: EmpleadoReal;
  @Input() origen : string;

  Rol = [{ id: '', nombre: '' }];
  TipoSalario = [{ id: '', nombre: '' }];
  Descuento = [{ id: '', nombre: '' }];
  estado : boolean = false; 
  constructor(private servicios : OcpEmpleadosService) { }

  ngOnInit() {

    if (!this.empleado) {
      this.empleado = {"beneficio":0,"cedula":0,"codEmpleado":0,
      "costoEstMes":0,"descuento":"","equipo":0,"fecCargue": new Date ,
      "fehcaIngrero":new Date,"ingRet":"","nombres":"","observaciones":"",
      "rol":"","salario":0,"salarioTotal":0,"tipoContrato":"","tipoSalario":"","usuario":""};
    }

    this.listarRoles();
    this.listaTiposSalario();
    this.ListarDescuentos();
    this.ingreso("INGRESO");
  }

  ingreso(seleccion :any){
    if(this.estado){
      this.empleado.ingRet = seleccion; 
    }else{
      this.empleado.ingRet = seleccion; 
    }
  }
  
  crearEmpleado(){
    console.log("crea");
    this.empleado.usuario = "user";
    this.servicios.createEmployed(this.empleado);
  }

  editarEmpleado(){
    console.log("edita");
    this.servicios.editEmployed (this.empleado);
  }

  listarRoles() {
    this.Rol = [
      { id: '1', nombre: 'Analista Junior' },
      { id: '2', nombre: 'Analista Senior' },
      { id: '3', nombre: 'Desarrollador Junior' },
      { id: '4', nombre: 'Desarrollador Senior' },
    ];
  }

  listaTiposSalario() {
    this.TipoSalario = [
      { id: '1', nombre: 'Integral' },
      { id: '2', nombre: 'Menor a 10 SMLV' },
    ];
  }

  ListarDescuentos() {
    this.Descuento = [
      { id: '1', nombre: 'FALSO' },
      { id: '2', nombre: 'VERDADERO' },
    ];
  }

}

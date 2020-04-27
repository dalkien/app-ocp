import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Empleado, EmpleadoReal } from 'src/app/Model/empleado';
import { OcpEmpleadosService } from '../../servicios/ocp-empleados.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  @Input() empleado: Empleado;

  empladoEdit : EmpleadoReal; 

  @Output() editaEmpleado = new EventEmitter<EmpleadoReal>(); 
  
  
  constructor(private servicio :  OcpEmpleadosService) { }

  ngOnInit() {
  }

  onEditarSendEmpleado(){
    this.editaEmpleado.emit(this.empladoEdit);
  }

  edicionEmpleado(){
    this.servicio.editEmployed(this.empladoEdit); 
  }
  
  reciveEmpleado(e: EmpleadoReal){
    this.empladoEdit = e; 
  }

}

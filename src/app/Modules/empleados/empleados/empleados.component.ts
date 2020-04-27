import { Component, OnInit } from '@angular/core';
import { OcpEmpleadosService } from '../../servicios/ocp-empleados.service';
import { Empleado } from 'src/app/Model/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  

  constructor( private servicios : OcpEmpleadosService) { }

  ngOnInit() {

   }

}

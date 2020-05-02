import { Component, OnInit, ViewChild } from '@angular/core';
import { CamposEmpleadoComponent } from '../campos-empleado/campos-empleado.component';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent implements OnInit {
  nuevo = "nuevo";
  
  constructor() { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado, GetEmpleados, EmpleadoReal, GenericResponse } from 'src/app/Model/empleado';

@Injectable({
  providedIn: 'root'
})
export class OcpEmpleadosService {

  private employeds : GetEmpleados; 
  constructor(private servEmpleados: HttpClient ) { }

  getAllEmployeds(){
    this.servEmpleados.get('http://localhost:7001/WsOCP-web/webresources/OCP/getAllEmployed').
      subscribe((data) => { this.employeds = data as GetEmpleados}, (error)=> console.log(error));
      return this.employeds;
  }

  editEmployed(empleadoMod: EmpleadoReal){
    let rta : GenericResponse ; 
    this.servEmpleados.put('http://localhost:7001/WsOCP-web/webresources/OCP/editEmpleado', empleadoMod)
        .subscribe( (data) => rta = data as GenericResponse ,(error) => console.log(error) ) ;
        return rta;
  }

  createEmployed(empleadoCrea: EmpleadoReal){
    let rta : GenericResponse ; 
    this.servEmpleados.post('http://localhost:7001/WsOCP-web/webresources/OCP/inserEmpleado', empleadoCrea)
    .subscribe((data) => rta = data as GenericResponse , (error) => console.log(error))
    return rta
  }

  getList(){
    return this.employeds;    
  }

}

import { GenericResponse } from './../../Model/empleado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParametrosOcpService {

  subParam :infSubParam; 
  param : infParam;
  constructor(private service : HttpClient) { }

  getPArametros(){
    this.service.get("http://localhost:7001/WsOCP-web/webresources/OCPParametros//WsOCP-web/webresources/OCPParametros/getAllListParam")
    .subscribe((data) => { this.param = data as infParam; console.log(data)}, 
      (error) => console.log(error));
      return this.param;
  }

  getSubpram(id:number){
     this.service.get("http://localhost:7001/WsOCP-web/webresources/OCPParametros/paramDesc/?id="+id)
      .subscribe((data) => { this.subParam = data as infSubParam; console.log(data)}, 
        (error) => console.log(error));
        return this.subParam;
  }

  getSubpramDNF(id:number){
    return this.service.get("http://localhost:7001/WsOCP-web/webresources/OCPParametros/paramDesc/?id="+id)
      ;
  }

  getLista(){
    return this.subParam;
  }
}

export interface subparametros{
  comentario: string;
  nombre: string; 
  parametro: number;
  subparametro: number;
}

export interface infSubParam{
  paraDesc: subparametros[]; 
  response: GenericResponse
}

export interface parametros{
  descripParameter: string;
  parameter: number;
}

export interface infParam{
  parametos: parametros[];
  response: GenericResponse;
}
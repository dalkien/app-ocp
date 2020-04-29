import { listProyectos } from './../../Model/proyecto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { proyectoReal } from 'src/app/Model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosOcpService {

  constructor( private service :HttpClient) { }

  proyectos : listProyectos;
  getAllProyects(){
    this.service.get("http://localhost:7001/WsOCP-web/webresources/OCPProyectos/getAllProyects")
      .subscribe((data)=> {this.proyectos = data as listProyectos; console.log(data)} , (error) => console.log(error) );
    return this.proyectos;
  }

  getList(){
    return this.proyectos;    
  }

}

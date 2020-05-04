import { listProyectos, proyectoCrea } from './../../Model/proyecto';
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
      .subscribe((data)=> {this.proyectos = data as listProyectos} , (error) => console.log(error) );
    return this.proyectos;
  }

  getAllProyectsDNF(){
    return this.service.get("http://localhost:7001/WsOCP-web/webresources/OCPProyectos/getAllProyects");
  }

  getList(){
    return this.proyectos;    
  }

  createProyect(proyect: proyectoCrea){
    this.service.post("htps://localhost:7001/WsOCP-web/webresources/OCPProyectos/createProyect",proyect);
  }

  editProyect(proyect: proyectoReal){
    this.service.put("htps://localhost:7001/WsOCP-web/webresources/OCPProyectos/editProyect",proyect);
  }

}

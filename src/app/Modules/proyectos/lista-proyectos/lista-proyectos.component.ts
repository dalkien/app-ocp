import { infSubParam, subparametros } from './../../servicios/parametros-ocp.service';
import { listProyectos, proyectoReal, infoProyect, informa } from './../../../Model/proyecto';
import { ProyectosOcpService } from './../../servicios/proyectos-ocp.service';
import { Component, OnInit } from '@angular/core';
import { Proyecto,  } from 'src/app/Model/proyecto';
import { ParametrosOcpService } from '../../servicios/parametros-ocp.service';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})
export class ListaProyectosComponent implements OnInit {

  proyectoSeleccionado: Proyecto;

  proyectos = [] as Proyecto[];

  proyects : listProyectos; 

  proyectsLs :  proyectoReal []; 

  proyectsInfo : infoProyect[] = [];
  constructor(private servProyecto :  ProyectosOcpService,
      private serviListas : ParametrosOcpService) { }

  ngOnInit() {
    this.serviListas.getSubpram(198);
    this.servProyecto.getAllProyects();
    }
  
  verProyecto(p: Proyecto): void {
    this.proyectoSeleccionado = p;
  }

valList(){
    this.proyects = this.servProyecto.getList();
    let listProy : any = this.serviListas.getLista();
    if(this.proyects != undefined){
      this.proyectsLs = this.proyects.proyectos;
      let listaOk : boolean = true;
      let infor: informa = { 'codProyecto':0, 'nombre': '', 'nombreCliente':''}; 
      this.proyectsLs.forEach( element => {
        let infoData : infoProyect = { 'proyecto' : element , 'info': infor };
        let nombre : subparametros = listProy.paraDesc.find((element2) =>
            element2.nombre === infoData.proyecto.codProyecto.toString()  );
        let cliente : subparametros = listProy.paraDesc.find((element2) =>
            element2.subparametro == infoData.proyecto.idCliente  );
        cliente = cliente !=undefined ? cliente :
         { 'nombre':'', 'comentario':'','parametro': 0, 'subparametro' : 0} ; 
        infoData.info.nombre = nombre.comentario; 
        infoData.info.codProyecto = element.codProyecto; 
        infoData.info.nombreCliente = cliente.nombre ; 
        this.proyectsInfo.push(infoData);
      });
      return true;
    }else{
      return false;
    }
  }

}

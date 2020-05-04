import { ParametrosOcpService, infSubParam, subparametros } from './../../servicios/parametros-ocp.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { proyectoReal, listProyectos } from 'src/app/Model/proyecto';
import { ProyectosOcpService } from '../../servicios/proyectos-ocp.service';

@Component({
  selector: 'app-lista-proyecto',
  templateUrl: './lista-proyecto.component.html',
  styleUrls: ['./lista-proyecto.component.css']
})
export class ListaProyectoComponent implements OnInit {

  Proyectos : proyectoReal[] = [] ;
  Proyectosls : listProyectos ;
  ProyectoSeleccionado: proyectoReal;
  CodProyecto = '';
  CodProyect:number = 0;
  parametros:infSubParam; 
  paramProyect:subparametros[];
  selParam: subparametros;
  listaDatos: string[] = [];
  constructor(private proyetServ: ProyectosOcpService ,
    private serviListas : ParametrosOcpService) { }

  ngOnInit() {
    this.listaProyectos();
  }

  listaProyectos() {
    this.proyetServ.getAllProyectsDNF()
    .subscribe((data)=> {this.Proyectosls = data as listProyectos ;
      this.Proyectos = this.Proyectosls.proyectos;
       //console.log(JSON.stringify(this.Proyectos));
      } );
      this.serviListas.getSubpramDNF(0)
      .subscribe((data) => {this.parametros = data as infSubParam;
      this.paramProyect = this.parametros.paraDesc.filter((x) => x.parametro === 198); 
      });
  }

  datosProyecto(codigo: string) {
     this.ProyectoSeleccionado = this.Proyectos.find(
       proyecto => proyecto.codProyecto === parseInt(codigo) 
     );
     debugger;
     this.nameProy(parseInt(codigo));
  }

  recibirCodProyecto($event) {
    this.CodProyecto = $event;
  }

  async validarProyectoSeleccionado() {
    if (this.CodProyecto === '') {
      this.ProyectoSeleccionado = undefined;
    }
  }

  nameProy(codigo:number){
    this.selParam = this.parametros.paraDesc.find((x)=> x.nombre === codigo.toString());
    let direccion = this.parametros.paraDesc.find((x)=> x.subparametro === this.ProyectoSeleccionado.idDireccion);
    let lineaNeg = this.parametros.paraDesc.find((x)=> x.subparametro === this.ProyectoSeleccionado.idLineaNegocio);
    let moneda = this.parametros.paraDesc.find((x)=> x.subparametro === this.ProyectoSeleccionado.idMoneda);
    this.listaDatos.push(direccion.nombre);
    this.listaDatos.push(lineaNeg.nombre);
    this.listaDatos.push(moneda.nombre);
    this.listaDatos.push(this.ProyectoSeleccionado.fechaInicio.toString().split('T')[0]);
    this.listaDatos.push(this.ProyectoSeleccionado.fechaFin.toString().split('T')[0]);
    const fechaI = new Date(this.ProyectoSeleccionado.fechaInicio.toString().split('T')[0]).getTime();
      const fechaF = new Date(this.ProyectoSeleccionado.fechaFin.toString().split('T')[0]).getTime();
      const dias = (fechaF - fechaI) / (1000 * 60 * 60 * 24);
      this.listaDatos.push(dias.toString());
  }
}

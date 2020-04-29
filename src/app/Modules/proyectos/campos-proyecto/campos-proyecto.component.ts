import { parametros, infSubParam, subparametros } from './../../servicios/parametros-ocp.service';
import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from 'src/app/Model/proyecto';
import { Cliente } from 'src/app/Model/cliente';
import { ParametrosOcpService } from '../../servicios/parametros-ocp.service';

@Component({
  selector: 'app-campos-proyecto',
  templateUrl: './campos-proyecto.component.html',
  styleUrls: ['./campos-proyecto.component.css']
})
export class CamposProyectoComponent implements OnInit {

  @Input() proyecto: Proyecto;
  Clientes : subparametros [] = [] ;
  Monedas : subparametros [] = [];
  TipoTarifa : subparametros [] = [];
  EstadoProyecto : subparametros [] = [];
  Categoria : subparametros [] = [];
  Direccion : subparametros [] = [];
  LineaNegocio : subparametros [] = [];
  TipoProyecto : subparametros [] = [];
  Servicio : subparametros [] = [];

  ListasGenerales: infSubParam; 
  constructor(private serviceList : ParametrosOcpService) {
     this.serviceList.getSubpram(0); 
   }

  ngOnInit() {
    if (!this.proyecto) {
      this.proyecto = {
        cliente: '',
        ocContrato: '',
        tipoTarifa: '',
        estadoProyecto: '',
        estadoContrato: '',
        moneda: '',
        categoria: '',
        direccion: '',
        lineaNegocio: '',
        tipoproyecto: '',
        servicio: '',
      } as Proyecto;
    }

  }

  valListas(){
    this.ListasGenerales = this.serviceList.getLista();
    //return this.ListasGenerales !=undefined; 
    if(this.ListasGenerales !=undefined){
      this.listarClientes();
      this.listarMonedas();
      this.listarTiposTarifa();
      this.listarEstadosProyecto();
      this.listarCategorias();
      this.listarDirecciones();
      this.listarLineasNegocio();
      this.listarTiposProyecto();
      this.listarServicios();
      return true;
    }else{
      return false;
    }
  }

  restarFechas() {
    if (this.proyecto.fechaInicioContractual !== '' && this.proyecto.fechaFinContractual !== '') {
      const fechaI = new Date(this.proyecto.fechaInicioContractual).getTime();
      const fechaF = new Date(this.proyecto.fechaFinContractual).getTime();
      const dias = (fechaF - fechaI) / (1000 * 60 * 60 * 24);
      if (dias <= 0) {
        this.proyecto.fechaFinContractual = '';
        this.proyecto.duracionProyecto = '';
      } else {
        this.proyecto.duracionProyecto = dias + '';
      }
    }
  }

  listarClientes() {
    let clients: subparametros[] = this.ListasGenerales.paraDesc.filter((elemento) => 
      elemento.parametro == 309
    );
    if(this.Clientes.length <= 0){
      this.Clientes = clients;
    }
  }

  listarMonedas() {
    let monedas: subparametros[] = this.ListasGenerales.paraDesc.filter((elemento) => 
      elemento.parametro == 2
    );
    if(this.Monedas.length <= 0){
      this.Monedas = monedas;
    }
  }

  listarTiposTarifa() {
    let tarifa: subparametros[] = this.ListasGenerales.paraDesc.filter((elemento) => 
      elemento.parametro == 3
    );
    if(this.TipoTarifa .length <= 0){
      this.TipoTarifa = tarifa;
    }
  }

  listarEstadosProyecto() {
    let estado: subparametros[] = this.ListasGenerales.paraDesc.filter((elemento) => 
    elemento.parametro == 4
  );
  if(this.EstadoProyecto .length <= 0){
    this.EstadoProyecto = estado;
  }
  }

  listarCategorias() {
    let catego: subparametros[] = this.ListasGenerales.paraDesc.filter((elemento) => 
      elemento.parametro == 5
    );
    if(this.Categoria .length <= 0){
      this.Categoria = catego;
    }
  }

  listarDirecciones() {
    let direc: subparametros[] = this.ListasGenerales.paraDesc.filter((elemento) => 
      elemento.parametro == 6
    );
    if(this.Direccion .length <= 0){
      this.Direccion = direc;
    }
  }

  listarLineasNegocio() {
    let linea: subparametros[] = this.ListasGenerales.paraDesc.filter((elemento) => 
      elemento.parametro == 7
    );
    if(this.LineaNegocio .length <= 0){
      this.LineaNegocio = linea;
    }
  }

  listarTiposProyecto() {
    let tipo: subparametros[] = this.ListasGenerales.paraDesc.filter((elemento) => 
      elemento.parametro == 8
    );
    if(this.TipoProyecto .length <= 0){
      this.TipoProyecto = tipo;
    }
  }

  listarServicios() {
    let serv: subparametros[] = this.ListasGenerales.paraDesc.filter((elemento) => 
      elemento.parametro == 9
    );
    if(this.Servicio .length <= 0){
      this.Servicio = serv;
    }
  }

}

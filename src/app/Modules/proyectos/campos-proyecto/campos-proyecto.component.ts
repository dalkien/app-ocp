import { ProyectosOcpService } from './../../servicios/proyectos-ocp.service';
import { proyectoCrea } from './../../../Model/proyecto';
import { parametros, infSubParam, subparametros } from './../../servicios/parametros-ocp.service';
import { Component, OnInit, Input } from '@angular/core';
import { Proyecto, proyectoReal } from 'src/app/Model/proyecto';
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
  Gerentes : subparametros [] = []; 
  Operaciones : subparametros [] = [];
  ClasificacionVenta: subparametros [] = [];
  Directores: subparametros [] = [];
  Alianzas: subparametros [] = [];
  TipServicio: subparametros [] = [];

  gerente: number;  
  opera: string= "";
  comentario: string = "";
  FTESPlan: number;  
  costoPlaneado: number;
  factICA : number;
  factProvIm: number; 
  clasVenta: number;
  fechaFinContractual: Date; 
  fechaInicioContractual: Date; 
  director: number; 
  alianza:number;
  tipServi :number; 
  valTarifa1:number;
  valTarifa2:number;
  valTarifa3:number;
  margenPlaneado:number;

  ListasGenerales: infSubParam; 
  constructor(private serviceList : ParametrosOcpService, private proyectoServ : ProyectosOcpService ) {
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
      this.listarGerentes();
      //this.listarOperaciones();
      this.listarClasVenta();
      this.listarDirectores();
      this.listarAlianzas();
      this.listarTipoServicios();
      return true;
    }else{
      return false;
    }
  }

  restarFechas() {
    if (this.proyecto.fechaInicioContractual !== undefined && this.proyecto.fechaFinContractual !== undefined) {
      console.log("fec ini: "+ this.proyecto.fechaInicioContractual);
      console.log("fec ini: "+ this.proyecto.fechaFinContractual);
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
      elemento.parametro == 136
    );
    if(this.Servicio .length <= 0){
      this.Servicio = serv;
    }
  }
  
  listarGerentes(){
    let serv: subparametros[] = this.ListasGenerales.paraDesc.filter((elemento) => 
      elemento.parametro == 166
    );
    if(this.Gerentes .length <= 0){
      this.Gerentes = serv;
    }
  }

  listarOperaciones(){
    let serv: subparametros[] = this.ListasGenerales.paraDesc.filter((elemento) => 
      elemento.parametro == 116
    );
    if(this.Operaciones .length <= 0){
      this.Operaciones	 = serv;
    }
  }

  listarClasVenta(){
    let serv: subparametros[] = this.ListasGenerales.paraDesc.filter((elemento) => 
      elemento.parametro == 115
    );
    if(this.ClasificacionVenta .length <= 0){
      this.ClasificacionVenta	 = serv;
    }
  }

  listarDirectores(){
    let serv: subparametros[] = this.ListasGenerales.paraDesc.filter((elemento) => 
      elemento.parametro == 159
    );
    if(this.Directores .length <= 0){
      this.Directores	 = serv;
    }
  }

  //Alianzas
  listarAlianzas(){
    let serv: subparametros[] = this.ListasGenerales.paraDesc.filter((elemento) => 
      elemento.parametro == 110
    );
    if(this.Alianzas .length <= 0){
      this.Alianzas	 = serv;
    }
  }
  //tipServi
  listarTipoServicios(){
    let serv: subparametros[] = this.ListasGenerales.paraDesc.filter((elemento) => 
      elemento.parametro == 141
    );
    if(this.TipServicio .length <= 0){
      this.TipServicio	 = serv;
    }
  }
  parseDate(s) {
    var months = {jan:0,feb:1,mar:2,apr:3,may:4,jun:5,
                  jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};
    var p = s.split('-');
    return new Date(p[0], p[1], p[2]);
  }

  creaProyecto(){
     let datosProy : proyectoReal = {
      alcance: this.proyecto.alcance,
      codProyecto: parseInt(this.proyecto.codigo),
      comentarios:             this.comentario   ,
      costoPlaneado:           this.costoPlaneado  ,
      duracion:                parseInt(this.proyecto.duracionProyecto)   ,
      factorICA:               this.factICA   ,
      factorProvIndem:         this.factProvIm   ,
      fecCargue:               new Date()  ,
      fechaFin:                this.parseDate(this.proyecto.fechaFinContractual)   ,
      fechaInicio:             this.parseDate(this.proyecto.fechaInicioContractual)   ,
      ftePlaneado:             this.FTESPlan   ,
      idCategoria:             parseInt(this.proyecto.categoria)   ,
      idClasificacionVenta:    this.clasVenta   ,
      idCliente:               parseInt(this.proyecto.cliente)   ,
      idDireccion:             parseInt(this.proyecto.direccion)   ,
      idDirector:              this.director   ,
      idEstadoProyecto:        parseInt(this.proyecto.estadoProyecto)   ,
      idGerente:               this.gerente   ,
      idLineaNegocio:          parseInt(this.proyecto.lineaNegocio)   ,
      idMoneda:                parseInt(this.proyecto.moneda)   ,
      idServicio:              parseInt(this.proyecto.servicio)   ,
      idTipoAlianza:           this.alianza   ,
      idTipoProyecto:          parseInt(this.proyecto.tipoproyecto)   ,
      idTipoServicio:          this.tipServi   ,
      idTipoTarifa:            parseInt(this.proyecto.tipoTarifa)   ,
      margenPlanaedo:          this.margenPlaneado, //this.proyecto   ,
      usuario:                 "creaProyet"   ,
      valorFormalHost:         parseInt(this.proyecto.valorFormalizadoHost)   ,
      valorTarifa:             this.valTarifa1   ,
      valorTarifa2:            this.valTarifa2   ,
      valorTarifa3:            this.valTarifa3 
    }
    ; 
    let proyect : proyectoCrea = { proyecto: datosProy, descripcion: this.proyecto.nombre,
       ocContrato: this.proyecto.ocContrato, ocNumContrato: this.proyecto.nContratoOc }; 
    //console.log( JSON.stringify (proyect));
    this.proyectoServ.createProyect(proyect);
  }

  editarProyecto(){
    let datosProy : proyectoReal = {
     alcance: this.proyecto.alcance,
     codProyecto: parseInt(this.proyecto.codigo),
     comentarios:             this.comentario   ,
     costoPlaneado:           this.costoPlaneado  ,
     duracion:                parseInt(this.proyecto.duracionProyecto)   ,
     factorICA:               this.factICA   ,
     factorProvIndem:         this.factProvIm   ,
     fecCargue:               new Date()  ,
     fechaFin:                this.parseDate(this.proyecto.fechaFinContractual)   ,
     fechaInicio:             this.parseDate(this.proyecto.fechaInicioContractual)   ,
     ftePlaneado:             this.FTESPlan   ,
     idCategoria:             parseInt(this.proyecto.categoria)   ,
     idClasificacionVenta:    this.clasVenta   ,
     idCliente:               parseInt(this.proyecto.cliente)   ,
     idDireccion:             parseInt(this.proyecto.direccion)   ,
     idDirector:              this.director   ,
     idEstadoProyecto:        parseInt(this.proyecto.estadoProyecto)   ,
     idGerente:               this.gerente   ,
     idLineaNegocio:          parseInt(this.proyecto.lineaNegocio)   ,
     idMoneda:                parseInt(this.proyecto.moneda)   ,
     idServicio:              parseInt(this.proyecto.servicio)   ,
     idTipoAlianza:           this.alianza   ,
     idTipoProyecto:          parseInt(this.proyecto.tipoproyecto)   ,
     idTipoServicio:          this.tipServi   ,
     idTipoTarifa:            parseInt(this.proyecto.tipoTarifa)   ,
     margenPlanaedo:          this.margenPlaneado, //this.proyecto   ,
     usuario:                 "creaProyet"   ,
     valorFormalHost:         parseInt(this.proyecto.valorFormalizadoHost)   ,
     valorTarifa:             this.valTarifa1   ,
     valorTarifa2:            this.valTarifa2   ,
     valorTarifa3:            this.valTarifa3 
   }; 
   //console.log( JSON.stringify (proyect));
   this.proyectoServ.editProyect(datosProy);
 }

}

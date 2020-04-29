import { proyectoReal } from './proyecto';
import { GenericResponse } from 'src/app/Model/empleado';
export interface Proyecto {
  codigo: string;
  nombre: string;
  cliente: string;
  fechaInicioContractual: string;
  fechaFinContractual: string;
  duracionProyecto: string;
  alcance: string;
  ocContrato: string;
  nContratoOc: string;
  moneda: string;
  valorTotalAdjudicado: string;
  valorFormalizadoHost: string;
  valorUltimoContrato: string;
  tipoTarifa: string;
  tarifa: string;
  estadoProyecto: string;
  categoria: string;
  direccion: string;
  lineaNegocio: string;
  tipoproyecto: string;
  servicio: string;
  subproyecto: string;
  estadoContrato: string;

}


export interface proyectoReal{
  alcance: string; 
      codProyecto: number;    
      comentarios: string;
      costoPlaneado: number;
      duracion: number;
      factorICA: number;
      factorProvIndem: number;    
      fecCargue: Date;
      fechaFin: Date;    
      fechaInicio:Date;
      ftePlaneado: number;
      idCategoria: number;
      idClasificacionVenta:  number;
      idCliente: number;
      idDireccion: number;
      idDirector: number;
      idEstadoProyecto: number;   
      idGerente: number;
      idLineaNegocio: number;
      idMoneda: number;
      idServicio: number;
      idTipoAlianza: number;
      idTipoProyecto: number;
      idTipoServicio: number;
      idTipoTarifa:   number;
      margenPlanaedo: number;
      usuario: string;
      valorFormalHost: number;      
      valorTarifa: number;
      valorTarifa2: number;
      valorTarifa3: number;
}

export interface listProyectos{
  response: GenericResponse;
  proyectos: proyectoReal[];
}

export interface infoProyect {
  proyecto: proyectoReal;
  info: informa ; 
}
export interface informa {
  codProyecto: number;
  nombre: string;
  nombreCliente: string; 
} 
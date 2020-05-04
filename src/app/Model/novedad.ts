import { proyectoReal } from './proyecto';
import { EmpleadoReal } from './empleado';
export interface Novedad {

  tipoNovedad: string;
  idProyecto: string;
  codigoEmpleado: string;
  valor: number;
  anio: number;
  mes: string;
  comentarios: string;
  numeroDiasHabiles: number;
  razon: string;

}

export interface NovedadResponse{
  codigo : number; 
  desProyecto: paramDesc;
  empleado: EmpleadoReal; 
  novBhes: novBhe []; 
  novIncLins: novIncLin []; 
  novOtros: novOtro [];
  proyectos: proyectoReal; 
  tipo: string;
}

export interface novBhe{
  anio        : number;
  codEmpleado : number;
  comentarios : string;
  fecCargue   : Date;
  idProyecto  : number;
  mes         : number;
  tipo        : number;
  usuario     : string;
  valor       : number;
}

export interface novIncLin{
  anio        : number;
  atep        : number;
  codEmpleado : number;
  egm         : number;
  fecCargue   : Date;
  lm          : number;
  lnr         : number;
  lr          : number;
  luto        : number;
  mes         : number;
  paternidad  : number;
  sanciones   : number;
  usuario     : string;
  valor       : number;
}

export interface novOtro{
  anio        : number;
  codEmpleado : number;
  comentarios : string;
  fecCargue   : Date;
  mes         : number;
  tipo        : number;
  usuario     : string;
  valor       : number;
}

export interface paramDesc{
  comentarios     : string; 
  estadoParametro : number;
  fecCreacion     : Date; 
  idParametro     : number;
  nombreParametro : string;
  tipoParametro   : number;
  usuario         : string,
  valor1          : number,
  valor2          : string;
}
export interface Empleado {

  codigo: string;
  tipoContrato: string;
  documento: string;
  rol: string;
  nombres: string;
  fechaIngreso: string;
  equipo: string;
  tipoSalario: string;
  salarioTotal: string;
  salario: string;
  beneficio: string;
  costoEstandarMes: string;
  descuento: string;
  novedad: string;
  observaciones: string;

}
export interface EmpleadoReal {

  codEmpleado: number  ;
  cedula: number       ;
  nombres: string      ;
  fehcaIngrero :Date ;
  ingRet: string       ;
  tipoContrato: string ;
  rol: string          ;
  tipoSalario: string  ;
  salario: number      ;
  beneficio: number    ;
  equipo: number       ;
  descuento: string    ;
  salarioTotal: number ;
  costoEstMes: number  ;
  observaciones: string;
  fecCargue: Date      ;
  usuario: string      ;
} 

export interface GetEmpleados {
  response:GenericResponse; 
  empleados: EmpleadoReal []; 
}

export interface GenericResponse{
  descripcion: string;
  messageCode: string;
  returnCode: string;
}
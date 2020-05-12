import { novBhe, novIncLin, novOtro } from 'src/app/Model/novedad';
import { EmpleadoReal } from 'src/app/Model/empleado';
import { proyectoReal } from 'src/app/Model/proyecto';
export interface Dnf {
    proyecto: proyectoReal;
    empleadosInfo: EmpleadoInfo[];
    
}

export interface EmpleadoInfo{
    empleado: EmpleadoReal; 
    noveBhes: novBhe[]; 
    novIncLins: novIncLin[];
    novOtros: novOtro[];
    ubicacion: string; 
    tarifaXper: number;
    ingHoras: number;
    costHoras: number;
    totalHR: number;
    otrosCost: number;
    otrasObserv: string;
}
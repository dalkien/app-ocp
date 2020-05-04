import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovedadesOcpService {

  constructor(private http : HttpClient) { }

  getNovedadesMes(anio: string, mes: string ){
    return this.http.get("http://localhost:7001/WsOCP-web/webresources/OCPNovedades/allNovedadesMes?anio="
    +anio+"&mes="+mes);
  }
}

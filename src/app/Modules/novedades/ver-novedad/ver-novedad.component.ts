import { NovedadResponse } from 'src/app/Model/novedad';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ver-novedad',
  templateUrl: './ver-novedad.component.html',
  styleUrls: ['./ver-novedad.component.css']
})
export class VerNovedadComponent implements OnInit {

  @Input() novedadver : NovedadResponse;
  infoIn: string = "";
  constructor() { }

  ngOnInit() {
  }

  verData(){
    this.infoIn =JSON.stringify(this.novedadver);
  }



}

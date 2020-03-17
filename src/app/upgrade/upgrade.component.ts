import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {
NombreA:String
  HorasA:number
  Fecha:String
  Descipcion:String
  Prioridad:number

  constructor() { }

  ngOnInit() {
  }
prioridadB(){
  this.Prioridad=0;

  }
  prioridadM(){
  this.Prioridad=0;
    
  }
  prioridadA(){
  this.Prioridad=0;
    
  }


  Actualizar() {
  alert(this.NombreA);

  }

}

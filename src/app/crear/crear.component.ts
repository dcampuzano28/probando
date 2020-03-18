import { Component, OnInit } from '@angular/core';
import { NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  NombreA:String
  HorasA:number
  Fecha:String
  Descipcion:String
  Prioridad:number

  constructor() { }

  ngOnInit(): void {
  }

  prioridadB() {
  this.Prioridad=0;

  }
  prioridadM() {
  this.Prioridad = 0;
    
  }
  prioridadA() {
  this.Prioridad = 0;
    
  }

  Agregar(){
    alert(this.NombreA);
    alert(this.Prioridad);
  }


}


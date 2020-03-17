import { Component, OnInit } from '@angular/core';
import { NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  NombreA:""
  HorasA:number
  Fecha:""
  DescipcionA:""
  Prioridad:number

  constructor() { }

  ngOnInit(): void {
  }

  prioridadB() {
  this.Prioridad=1;

  }
  prioridadM() {
  this.Prioridad = 2;
    
  }
  prioridadA() {
  this.Prioridad = 3;
    
  }

  Agregar(){
    alert(this.NombreA);
    alert(this.Prioridad);
   alert("Se creo tu actividad");
   console.log("Este es el nombre "+this.NombreA);
   console.log("Esta es la hora "+this.HorasA);
   console.log("Esta es la fecha "+this.Fecha);
  }


}

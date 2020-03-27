import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  NombreC:""
  NombreA:""
  HorasA:number
  Fecha:""
  Prioridad:number
  constructor() { }

  ngOnInit(): void {
  }
ConsultarA(){
alert(this.NombreC);


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

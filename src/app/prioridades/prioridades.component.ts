import { Component, OnInit } from '@angular/core';
import { NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-prioridades',
  templateUrl: './prioridades.component.html',
  styleUrls: ['./prioridades.component.css']
})
export class PrioridadesComponent implements OnInit {

NombreActividad:""

  constructor() { }

  ngOnInit(): void {
  }

ConsultarS(){
this.NombreActividad

}

AgregarC(){
var prioridad=0;

if(prioridad==1){
var input='<button type="button" class="btn btn-outline-success">Baja</button> ';
$('#acciones').append(input);
}if(prioridad==2){
var input='<button type="button" class="btn btn-outline-warning">Media</button>';
$('#acciones').append(input);
}if(prioridad==3){
var input='<button type="button" class="btn btn-outline-danger">Alta</button>';
$('#acciones').append(input);
}

}


}

import { Component, OnInit } from '@angular/core';
import { Actividad } from '../Clases/Actividad';
import { ServicioActividadService } from 'app/Servicios/servicio-actividad.service';

@Component({
 selector: 'app-calendario',
 templateUrl: './calendario.component.html',
 styleUrls: ['./calendario.component.css']
})
 
export class CalendarioComponent implements OnInit {
 hora7: string[]=['7:00-8:00','---------','---------','---------','---------','---------','---------','---------']; 
hora8: string[]=['8:00-9:00','---------','---------','---------','---------','---------','---------','---------']; 
hora9: string[]=['9:00-10:00','---------','---------','---------','---------','---------','---------','---------']; 
hora10: string[]=['10:00-11:00','---------','---------','---------','---------','---------','---------','---------']; 
hora11: string[]=['11:00-12:00','---------','---------','---------','---------','---------','---------','---------']; 
hora12: string[]=['12:00-13:00','---------','---------','---------','---------','---------','---------','---------']; 
hora13: string[]=['13:00-14:00','---------','---------','---------','---------','---------','---------','---------']; 
hora14: string[]=['14:00-15:00','---------','---------','---------','---------','---------','---------','---------']; 
hora15: string[]=['15:00-16:00','---------','---------','---------','---------','---------','---------','---------']; 
hora16: string[]=['16:00-17:00','---------','---------','---------','---------','---------','---------','---------']; 
hora17: string[]=['17:00-18:00','---------','---------','---------','---------','---------','---------','---------']; 
hora18: string[]=['18:00-19:00','---------','---------','---------','---------','---------','---------','---------']; 
hora19: string[]=['19:00-20:00','---------','---------','---------','---------','---------','---------','---------']; 
hora20: string[]=['20:00-21:00','---------','---------','---------','---------','---------','---------','---------']; 
hora21: string[]=['21:00-22:00','---------','---------','---------','---------','---------','---------','---------']; 
 
/*dias: { [nombre: string]: IPerson; } = {
    "p1": { firstName: "F1", lastName: "L1" },
    "p2": { firstName: "F2" }
    };*/

constructor(private servicioActividad:ServicioActividadService) { }

actividad:Actividad
columna:Number //Es el indice para cada arreglo de las horas
fila:Number
nombre:String
dia:String
hora:Number

 ngOnInit() {
     this.actividad=this.servicioActividad.getActividad()
     console.log('Se envio la actividad '+ this.actividad.nombre)
 }

 agregarAtividad(){
     this.columna=this.actividad.dia
 }
 convColumna(dia:String){

 }

 
 }

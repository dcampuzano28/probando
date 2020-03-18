import { Component, OnInit } from '@angular/core';
import { ServicioActividadService } from 'app/Servicios/servicio-actividad.service';
import { Actividad } from  '../Clases/Actividad';
@Component({
  selector: 'app-actividad-crear',
  templateUrl: './actividad-crear.component.html',
  styleUrls: ['./actividad-crear.component.css']
})
export class ActividadCrearComponent implements OnInit {
  nombreActividad:String
  dia:String
  hora:String
  actividad:Actividad
  constructor(private servicioActividad:ServicioActividadService) { }

  ngOnInit(): void {
    this.enviarActividad()
  }

  crearActividad(){
    console.log('Se creo la actividad: '+this.nombreActividad)
    console.log('para el dia: '+this.dia+' a la hora: '+this.hora)
  }
  enviarActividad(){
    this.actividad.nombre=this.nombreActividad
    this.actividad.dia=this.dia
    this.actividad.hora=Number(this.hora)
    this.servicioActividad.setActividad(this.actividad)
  }

}

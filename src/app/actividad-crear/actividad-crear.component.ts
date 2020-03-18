import { Component, OnInit } from '@angular/core';
import { ServicioActividadService } from 'app/Servicios/servicio-actividad.service';
import { Actividad } from  '../Clases/Actividad';
@Component({
  selector: 'app-actividad-crear',
  templateUrl: './actividad-crear.component.html',
  styleUrls: ['./actividad-crear.component.css']
})
export class ActividadCrearComponent implements OnInit {
  actividad:Actividad
  
  constructor(private servicioActividad:ServicioActividadService) { }

  ngOnInit(): void {
    this.actividad=this.servicioActividad.nuevaActividad()
  }

  crearActividad(){
    this.servicioActividad.agregarActividad(this.actividad)
    console.log('Se creo la actividad '+this.actividad.nombre)

  }


}

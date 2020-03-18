import { Injectable } from '@angular/core';
import { Actividad } from '../Clases/Actividad';

@Injectable()
export class ServicioActividadService {

  miActividad:Actividad
  constructor() { }
  setActividad(actividad:Actividad){
    this.miActividad=actividad
  }
  getActividad(){
    return this.miActividad
  }
}

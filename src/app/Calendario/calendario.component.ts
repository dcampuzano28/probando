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
 


constructor(private servicioActividad:ServicioActividadService) { }

actividades:Actividad[]


 ngOnInit() {
        this.actividades=this.servicioActividad.getActividades()
        if(this.actividades)console.log('La ultima actividad creada es: '+this.actividades[this.actividades.length-1].nombre)

 }

 agregarAtividad(actividad:Actividad){

 }
 convColumna(dia:String){

 }
validardia(dia:String){
    let res:Number
    if(dia=='lunes'){
        res=0
    }
    if(dia=='martes'){
        res=1
    }
    if(dia=='miercoles'){
        res=2
    }
    if(dia=='jueves'){
        res=3
    }
    if(dia=='viernes'){
        res=4
    }
    if(dia=='sabado'){
        res=5
    }
    if(dia=='domingo'){
        res=6
    }
    return res
}
validarHora(hora:Number){
    let res:String[]
    if(hora==7) res=this.hora7
    if(hora==8) res=this.hora8
    if(hora==9) res=this.hora9
    if(hora==10) res=this.hora10
    if(hora==11) res=this.hora11
    if(hora==12) res=this.hora12
    if(hora==13) res=this.hora13
    if(hora==14) res=this.hora14
    if(hora==15) res=this.hora15
    if(hora==16) res=this.hora16
    if(hora==17) res=this.hora17
    if(hora==18) res=this.hora18
    if(hora==19) res=this.hora19
    if(hora==20) res=this.hora20
    if(hora==21) res=this.hora21
return res

}
getActividades(){

}
 
 }

import { Component, OnInit } from '@angular/core';
import { ServicioActividadService } from 'app/Servicios/servicio-actividad.service';
//import { ActividadService } from '../Servicio/actividad.service';
import { Actividad } from '../Clases/Actividad'
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})

export class CalendarioComponent implements OnInit {
  actividad:Actividad
  misActividades:Actividad[]
  hora: String="";
  dia: String="";
  constructor(private servicioActividad:ServicioActividadService){
    this.misActividades=servicioActividad.getActividades();
    this.actualizardesdeBD();// Aqui se llama el metodo donde la primera vez que se abra a la aplicacion se actualice la tablavista con los valores que de la BD
  }

  ngOnInit(): void {
    //this.ComparacionHora(this.hora);
    
    this.actividad= this.servicioActividad.getActividad();
    this.hora=this.actividad.hora_actividad
    this.dia=this.actividad.dia_actividad
    this.ComparacionDia(this.dia);
  }




  /*respuesta : any[] =[
    {
      "id_actividad": 1,
      "hora_actividad": "18",
      "dia_actividad": "lunes",
      "nom_actividad" : "Prueba",
      "des_actividad": "descripcion",
      "estado_actividad": false,
      "id_prioridad" :1,
      "id_estudiante":2
    },
  ]*/
  hora7: any[] = [
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
  ]
  hora8: any[] = [
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
  ]
  hora9: any[] = [
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
  ]
  hora10: any[] = [
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
  ]
  hora11: any[] = [
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
  ]
  hora12: any[] = [
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
  ]
  hora13: any[] = [
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
  ]
  hora14: any[] = [
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
  ]
  hora15: any[] = [
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
  ]
  hora16: any[] = [
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
  ]
  hora17: any[] = [
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
  ]
  hora18: any[] = [
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
  ]
  hora19: any[] = [
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
  ]
  hora20: any[] = [
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
  ]
  hora21: any[] = [
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
    {
      "nombre": "",
      "prioridad": 0,
      "descripcion": ""
    },
  ]
 
 
  ComparacionDia(dia: String){
    switch (dia) {
      case "lunes":
        console.log("Lunes.");
        this.ComparacionHora(this.hora,0);
        break;
      case "martes":
        console.log("Martes.");
        this.ComparacionHora(this.hora,1);
        break;
      case "miercoles":
        console.log("Miercoles.");
        this.ComparacionHora(this.hora,2);
        break;
      case "jueves":
        console.log("Jueves.");
        this.ComparacionHora(this.hora,3);
        break;
      case "viernes":
        console.log("Viernes.");
        this.ComparacionHora(this.hora,4);
        break;
      case "sabado":
        console.log("Sabado.");
        this.ComparacionHora(this.hora,5);
        break;
      case "domingo":
        console.log("Domingo.");
        this.ComparacionHora(this.hora,6);
        break;
      default:
        console.log("No such day exists!");
        break;
    }
  }
  
  ComparacionHora(hora: String, dia: number) {
    switch (hora) {
      case "7":
        console.log(this.hora7);
        var a = this.hora7[dia];
        var b = this.actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad= b.id_prioridad;
        a.descripcion=b.des_actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        break;
      case "8":
        console.log(this.hora8);
        var a = this.hora8[dia];
        var b = this.actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad= b.id_prioridad;
        a.descripcion=b.des_actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        break;
      case "9":
        console.log(this.hora9);
        var a = this.hora9[dia];
        var b = this.actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad= b.id_prioridad;
        a.descripcion=b.des_actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        break;
      case "10":
        console.log(this.hora10);
        var a = this.hora10[dia];
        var b = this.actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad= b.id_prioridad;
        a.descripcion=b.des_actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        break;
      case "11":
        console.log(this.hora11);
        var a = this.hora11[dia];
        var b = this.actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad= b.id_prioridad;
        a.descripcion=b.des_actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        break;
      case "12":
        console.log(this.hora12);
        var a = this.hora12[dia];
        var b = this.actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad= b.id_prioridad;
        a.descripcion=b.des_actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        break;
      case "13":
        console.log(this.hora13);
        var a = this.hora13[dia];
        var b = this.actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad= b.id_prioridad;
        a.descripcion=b.des_actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        break;
      case "14":
        console.log(this.hora14);
        var a = this.hora14[dia];
        var b = this.actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad= b.id_prioridad;
        a.descripcion=b.des_actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        break;
      case "15":
        console.log(this.hora15);
        var a = this.hora15[dia];
        var b = this.actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad= b.id_prioridad;
        a.descripcion=b.des_actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        break;
      case "16":
        console.log(this.hora16);
        var a = this.hora16[dia];
        var b = this.actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad= b.id_prioridad;
        a.descripcion=b.des_actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        break;
      case "17":
        console.log(this.hora17);
        var a = this.hora17[dia];
        var b = this.actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad= b.id_prioridad;
        a.descripcion=b.des_actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        break;
      case "18":
        console.log(this.hora18);
        var a = this.hora18[dia];
        var b = this.actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad= b.id_prioridad;
        a.descripcion=b.des_actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        break;
      case "19":
        console.log(this.hora19);
        var a = this.hora19[dia];
        var b = this.actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad= b.id_prioridad;
        a.descripcion=b.des_actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        break;
      case "20":
        console.log(this.hora20);
        var a = this.hora20[dia];
        var b = this.actividad
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad= b.id_prioridad;
        a.descripcion=b.des_actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        break;
      case "21":
        console.log(this.hora21);
        var a = this.hora21[dia];
        var b = this.actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad= b.id_prioridad;
        a.descripcion=b.des_actividad;
        console.log("Hola");
        console.log(a);
        console.log("Hola222");
        console.log(b);
        break;
      default:
        console.log("Error en la hora");
        break;
    }
  }
 
 
 
 actualizardesdeBD(){

 }
 nuevaActividadTabla(){

 }
}

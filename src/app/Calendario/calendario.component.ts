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
  hora7: any[]
  hora8: any[]
  hora9: any[]
  hora10: any[]
  hora11: any[]
  hora12: any[]
  hora13: any[]
  hora14: any[]
  hora15: any[]
  hora16: any[]
  hora17: any[]
  hora18: any[]
  hora19: any[]
  hora20: any[]
  hora21: any[]
  jsonres: any
  actividad: Actividad
  misActividades: Actividad[]
  hora: String = "";
  dia: String = "";

  constructor(private servicioActividad: ServicioActividadService) {
    this.misActividades = servicioActividad.getActividades();
    //this.actualizardesdeBD();// Aqui se llama el metodo donde la primera vez que se abra a la aplicacion se actualice la tablavista con los valores que de la BD
    this.inicializarTabla()
  }

  ngOnInit(): void {
    //this.ComparacionHora(this.hora);
    try {
      this.actividad = this.servicioActividad.getActividad();
      this.hora = this.actividad.hora_actividad
      this.dia = this.actividad.dia_actividad
    } catch (err) {
      console.log('Actividad Vacia')
    }
    this.ComparacionDia(this.dia);

    this.servicioActividad.getBDActi2().subscribe(
      /*(actividadesBD) => {
        this.misActividades = JSON.parse(actividadesBD)
        }*/
      (ractividades: Actividad[]) => //this.jsonres=(JSON.stringify(ractividades[0]))
        this.misActividades=ractividades
    ); 
    //console.log('aqui va, tamaño arreglo: ' +this.jsonres[0]);
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

  inicializarTabla() {
    this.hora7 = [
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
    this.hora8 = [
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
    this.hora9 = [
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
    this.hora10 = [
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
    this.hora11 = [
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
    this.hora12 = [
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
    this.hora13 = [
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
    this.hora14 = [
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
    this.hora15 = [
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
    this.hora16 = [
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
    this.hora17 = [
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
    this.hora18 = [
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
    this.hora19 = [
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
    this.hora20 = [
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
    this.hora21 = [
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

  }

  ComparacionDia(dia: String) {

    console.log(this.hora7);
    switch (dia) {
      case "lunes":
        console.log("Lunes.");
        this.ComparacionHora(this.hora, 0);
        break;
      case "martes":
        console.log("Martes.");
        this.ComparacionHora(this.hora, 1);
        break;
      case "miercoles":
        console.log("Miercoles.");
        this.ComparacionHora(this.hora, 2);
        break;
      case "jueves":
        console.log("Jueves.");
        this.ComparacionHora(this.hora, 3);
        break;
      case "viernes":
        console.log("Viernes.");
        this.ComparacionHora(this.hora, 4);
        break;
      case "sabado":
        console.log("Sabado.");
        this.ComparacionHora(this.hora, 5);
        break;
      case "domingo":
        console.log("Domingo.");
        this.ComparacionHora(this.hora, 6);
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
        console.log(a);
        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad = b.id_prioridad;
        a.descripcion = b.des_actividad;
        console.log(a);
        console.log(b);
        console.log(this.hora7);
        break;
      case "8":
        console.log(this.hora8);
        var a = this.hora8[dia];
        var b = this.actividad;
        console.log(a);
        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad = b.id_prioridad;
        a.descripcion = b.des_actividad;
        console.log(a);
        console.log(b);
        break;
      case "9":
        console.log(this.hora9);
        var a = this.hora9[dia];
        var b = this.actividad;
        console.log(a);

        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad = b.id_prioridad;
        a.descripcion = b.des_actividad;
        console.log(a);

        console.log(b);
        break;
      case "10":
        console.log(this.hora10);
        var a = this.hora10[dia];
        var b = this.actividad;

        console.log(a);

        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad = b.id_prioridad;
        a.descripcion = b.des_actividad;

        console.log(a);

        console.log(b);
        break;
      case "11":
        console.log(this.hora11);
        var a = this.hora11[dia];
        var b = this.actividad;

        console.log(a);

        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad = b.id_prioridad;
        a.descripcion = b.des_actividad;

        console.log(a);

        console.log(b);
        break;
      case "12":
        console.log(this.hora12);
        var a = this.hora12[dia];
        var b = this.actividad;

        console.log(a);

        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad = b.id_prioridad;
        a.descripcion = b.des_actividad;

        console.log(a);

        console.log(b);
        break;
      case "13":
        console.log(this.hora13);
        var a = this.hora13[dia];
        var b = this.actividad;

        console.log(a);

        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad = b.id_prioridad;
        a.descripcion = b.des_actividad;

        console.log(a);

        console.log(b);
        break;
      case "14":
        console.log(this.hora14);
        var a = this.hora14[dia];
        var b = this.actividad;

        console.log(a);

        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad = b.id_prioridad;
        a.descripcion = b.des_actividad;

        console.log(a);

        console.log(b);
        break;
      case "15":
        console.log(this.hora15);
        var a = this.hora15[dia];
        var b = this.actividad;

        console.log(a);

        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad = b.id_prioridad;
        a.descripcion = b.des_actividad;

        console.log(a);

        console.log(b);
        break;
      case "16":
        console.log(this.hora16);
        var a = this.hora16[dia];
        var b = this.actividad;

        console.log(a);

        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad = b.id_prioridad;
        a.descripcion = b.des_actividad;

        console.log(a);

        console.log(b);
        break;
      case "17":
        console.log(this.hora17);
        var a = this.hora17[dia];
        var b = this.actividad;

        console.log(a);

        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad = b.id_prioridad;
        a.descripcion = b.des_actividad;

        console.log(a);

        console.log(b);
        break;
      case "18":
        console.log(this.hora18);
        var a = this.hora18[dia];
        var b = this.actividad;

        console.log(a);

        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad = b.id_prioridad;
        a.descripcion = b.des_actividad;

        console.log(a);

        console.log(b);
        break;
      case "19":
        console.log(this.hora19);
        var a = this.hora19[dia];
        var b = this.actividad;

        console.log(a);

        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad = b.id_prioridad;
        a.descripcion = b.des_actividad;

        console.log(a);

        console.log(b);
        break;
      case "20":
        console.log(this.hora20);
        var a = this.hora20[dia];
        var b = this.actividad

        console.log(a);

        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad = b.id_prioridad;
        a.descripcion = b.des_actividad;

        console.log(a);

        console.log(b);
        break;
      case "21":
        console.log(this.hora21);
        var a = this.hora21[dia];
        var b = this.actividad;

        console.log(a);

        console.log(b);
        a.nombre = b.nom_actividad;
        a.prioridad = b.id_prioridad;
        a.descripcion = b.des_actividad;

        console.log(a);

        console.log(b);
        break;
      default:
        console.log("Error en la hora");
        break;
    }
  }


  actualizardesdeBD() {

  }
  nuevaActividadTabla() {

  }
}

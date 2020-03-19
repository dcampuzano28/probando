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


   function UserController($scope,$http) {
    $scope.update = function (user) {
        $http({
            method: 'POST',
            url: 'http://localhost:8000/aplicacion/api/aplicacion/actividad',
             data: {
                  "hora_actividad":this.HoraA,
                  "dia_actividad":this.Fecha,
                  "nom_actividad":this.NombreA,
                  "desc_activdad":this.Descripcion,
                  "esta_actividad":"tc.jpg"
                  
   },
            transformRequest: function (data) {
                var postData = data;
                for (var prop in data)
                postData.push(encodeURIComponent(prop) + "=" + encodeURIComponent(data[prop]));
                return postData.join("&");
            },
            success: function() {
              alert("Funciona");
            }
            
        });
    }
}
  }

  

}

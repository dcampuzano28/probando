import { Component, OnInit } from '@angular/core';
import { NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  
nom_Prioridad:" "
val_prioridad:number

  constructor() { }

  ngOnInit(): void {
  }

EnviarP(){
  alert(this.nom_Prioridad);
  alert(this.val_prioridad);
   function UserController($scope,$http) {
    $scope.update = function (user) {
        $http({
            method: 'POST',
            url: 'http://localhost:8000/aplicacion/api/aplicacion/actividad',
            //url para llamado 
             data: {
                  "nom_Prioridad":this.nom_Prioridad,
                  "val_prioridad":this.val_prioridad,
                 
                  
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

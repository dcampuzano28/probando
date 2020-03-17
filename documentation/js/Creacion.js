var prioridad=0;

function prioridadM(){
prioridad=1;
if(prioridad>1){
Baja.disabled=true;
}
}

function prioridadB(){
prioridad=2;
}

function prioridadA(){
prioridad=3;

}

function obtenerDatos(){
this.customers = [];
  this.firstName = '';
  this.lastName = '';

var app = angular.module('myApp', []);

this.addCustomer = function() {
    this.customers.push({
      firstName: this.firstName,
      lastName: this.lastName
    });
    this.firstName = '';
    this.lastName = '';
  };
// CONTROLLER
app.controller('myCtrl', function($scope) {  
  // MODEL:
    $scope.NombreA = nombre;
    $scope.Horas = Horas;
    $scope.Fecha =  Descripcion;
});


Swal.fire(Nombre);


}


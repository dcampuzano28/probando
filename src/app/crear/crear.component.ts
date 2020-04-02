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
  NombreA:""
  HorasA:number
  DescripcionA:""
  Prioridad:number
  dia:number
  id:number
  
  constructor(private servicioActividad:ServicioActividadService) { }

  ngOnInit(): void {
    this.actividad=this.servicioActividad.nuevaActividad()
    $('.dropdown-menu').on('click', function (e) {
  e.stopPropagation();
  console.log(`${e.target.textContent} clicado!`);
});
$('.dropdown-menu').keyup(function(e) {
  
  if(e.keyCode == 32){
     e.stopPropagation();
   }
});
  }
   
 lunes(){
  this.dia=1;
  }martes(){

  this.dia=2;
  
}miercoles(){
this.dia=3;
  }jueves(){
this.dia=4;
  }viernes(){
this.dia=5;
  }sabado(){
this.dia=6;
  }domingo(){
this.dia=7;


  } 

  Agregar(){
  
    var input='<h5 class="card-title " style="align-content: center;" id="pruebaN" >'+this.NombreA+'</h5>';
    var b=($('#exampleFormControlSelect').val());
    var c=($('#exampleFormControlSelect1').val());
    var d=($('#exampleFormControlSelect').text());
    var cuerpo1='<h6 class="card-title " style="align-content: center;"  >La hora de tu actividad es: '+d+'</h6>';
    var cuerpo='<h6 class="card-title " style="align-content: center;"  >'+this.DescripcionA+'</h6>';

    this.HorasA=+b;
  this.Prioridad=+c;
  

 if(this.dia==1){
    if(this.Prioridad==1)
  {

  var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>';
    
  $('#cuerpoT').append(botonP);
  }
if(this.Prioridad==2)
{
  

var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
   
$('#cuerpoT').append(botonP);
}
if(this.Prioridad==3)
{

var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
$('#cuerpoT').append(botonP);
}
   $('#pruebaN').append(input); 
      $('#cuerpoT').append(cuerpo1); 
      $('#cuerpoT').append(cuerpo); 
       
    }if(this.dia==2){
      if(this.Prioridad==1)
{

var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>';
   
$('#cuerpoT2').append(botonP);
}
if(this.Prioridad==2)
{
  

var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
   
$('#cuerpoT2').append(botonP);
}
if(this.Prioridad==3)
{

var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
$('#cuerpoT2').append(botonP);
}
      $('#pruebaN2').append(input); 
      $('#cuerpoT2').append(cuerpo1); 
      $('#cuerpoT2').append(cuerpo); 
       
    }if(this.dia==3){
      if(this.Prioridad==1)
{

var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>';
    $('#cuerpoT3').append(botonP); 

}
if(this.Prioridad==2)
{
  

var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
   $('#cuerpoT3').append(botonP);  

}
if(this.Prioridad==3)
{

var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
 $('#cuerpoT3').append(botonP); 
}
      $('#pruebaN3').append(input); 
      $('#cuerpoT3').append(cuerpo1); 
      $('#cuerpoT3').append(cuerpo); 
     
    }if(this.dia==4){
      if(this.Prioridad==1)
{

var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>';
   
$('#cuerpoT4').append(botonP); 
}
if(this.Prioridad==2)
{
  

var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
   
$('#cuerpoT4').append(botonP); 
}
if(this.Prioridad==3)
{

var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
$('#cuerpoT4').append(botonP); 
}
      $('#pruebaN4').append(input); 
      $('#cuerpoT4').append(cuerpo1); 
      $('#cuerpoT4').append(cuerpo); 
      
    }if(this.dia==5){
      if(this.Prioridad==1)
{

var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>';
   
  $('#cuerpoT5').append(botonP); 
}
if(this.Prioridad==2)
{
  

var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
   
  $('#cuerpoT5').append(botonP); 
}
if(this.Prioridad==3)
{

var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
  $('#cuerpoT5').append(botonP); 
}
      $('#pruebaN5').append(input); 
      $('#cuerpoT5').append(cuerpo1); 
      $('#cuerpoT5').append(cuerpo); 
    
    }if(this.dia==6){
      if(this.Prioridad==1)
{

var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>';
   
$('#cuerpoT6').append(botonP);
}
if(this.Prioridad==2)
{
  

var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
   
$('#cuerpoT6').append(botonP);
}
if(this.Prioridad==3)
{

var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
$('#cuerpoT6').append(botonP);
}
      $('#pruebaN6').append(input); 
      $('#cuerpoT6').append(cuerpo1); 
      $('#cuerpoT6').append(cuerpo); 
       
    }if(this.dia==7){
      if(this.Prioridad==1)
{

var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>';
   
$('#cuerpoT7').append(botonP); 
}
if(this.Prioridad==2)
{
  
var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
   
$('#cuerpoT7').append(botonP); 
}
if(this.Prioridad==3)
{

var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
$('#cuerpoT7').append(botonP); 
}
      $('#pruebaN7').append(input); 
      $('#cuerpoT7').append(cuerpo1);
      $('#cuerpoT7').append(cuerpo); 
       
    }
this.NombreA="";
  this.HorasA=0;
  this.DescripcionA="";
  this.Prioridad=0 ;

  }
  



  agregarD(){

   if (this.dia==1){
$("<div>", {
    'class': 'card',
    'style':'width: 18rem; position:"absolute" ; top:"10px"; left:"50px ";',
    'id':this.id
}).append(
    $('<div>', {
        'class': 'card-header card-header-danger'
        
           
     })
    
).appendTo('#probando1');
this.id=this.id+1;
this.dia=0;

   }if (this.dia==2){
$("<div>", {
    'class': 'card',
    'style':'width: 18rem; position:"absolute" ; top:"10px"; left:"50px ";'
}).append(
    $('<div>', {
        'class': 'card-header card-header-danger',
        'id': 'pruebaN'
    })
    
).appendTo('#probando2');
this.dia=0;
    
   }if (this.dia==3){
$("<div>", {
    'class': 'card',
    'style':'width: 18rem; position:"absolute" ; top:"10px"; left:"50px ";'
}).append(
    $('<div>', {
        'class': 'card-header card-header-danger',
        'id': 'pruebaN'
    })
    
).appendTo('#probando3');
this.dia=0;
    
   }if (this.dia==4){
$("<div>", {
    'class': 'card',
    'style':'width: 18rem; position:"absolute" ; top:"10px"; left:"50px ";'
}).append(
    $('<div>', {
        'class': 'card-header card-header-danger',
        'id': 'pruebaN'
    })
    
).appendTo('#probando4');
    this.dia=0;
   }if (this.dia==5){

    $("<div>", {
    'class': 'card',
    'style':'width: 18rem; position:"absolute" ; top:"10px"; left:"50px ";'
}).append(
    $('<div>', {
        'class': 'card-header card-header-danger',
        'id': 'pruebaN'
    })
    
).appendTo('#probando5');
this.dia=0;
   }if (this.dia==6){

    $("<div>", {
    'class': 'card',
    'style':'width: 18rem; position:"absolute" ; top:"10px"; left:"50px ";'
}).append(
    $('<div>', {
        'class': 'card-header card-header-danger',
        'id': 'pruebaN'
    })
    
).appendTo('#probando6');
this.dia=0;
   }if (this.dia==7){

    $("<div>", {
    'class': 'card',
    'style':'width: 18rem; position:"absolute" ; top:"10px"; left:"50px ";'
}).append(
    $('<div>', {
        'class': 'card-header card-header-danger',
        'id': 'pruebaN'
    })
    
).appendTo('#probando7');
this.dia=0;
   }
  
   

  }

  eliminar(){

    alert("delete");
$('#'+this.id+'').remove();

  }




  crearActividad(){
    this.servicioActividad.agregarActividad(this.actividad)
    console.log('Se creo la actividad '+this.actividad.nom_actividad)
    this.servicioActividad.addActividad(this.actividad).subscribe(
      data => {
      },
      err => console.error(err),
      () => console.log('No a cargado el post')
      )
    this.servicioActividad.setActividad(this.actividad)
  }

}

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
  HorasF:number
  DescripcionA:""
  Motivacion:""
  Prioridad:number
  dia:number
  id:number
  contadorT=0;
  
  constructor(private servicioActividad:ServicioActividadService) { }
  ngOnInit(): void {
    this.actividad=this.servicioActividad.nuevaActividad()
    $('.dropdown-menu').on('click', function (e) {
  e.stopPropagation();
});
$('.dropdown-menu').keydown(function(e) {
  
  if(e.keyCode == 32){
     e.stopPropagation();
     e.stopImmediatePropagation();
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
    
if(this.contadorT<1){
  
  this.Prioridad=0;
this.actividad.nom_actividad=this.NombreA;
var HoraIn=$('select#exampleFormControlSelect1').val();;
  var HoraFn=$('select#exampleFormControlSelect2').val();;
  this.HorasA=+HoraIn;
this.actividad.HoraIn=this.HorasA;
this.HorasF=+HoraFn;
this.actividad.HoraFn=this.HorasF;
this.actividad.Motivacion=this.Motivacion;
var p=$('select#exampleFormControlSelect3').val();
    var input='<h5 class="card-title " style="align-content: center;" id="pruebaN" >'+this.actividad.nom_actividad+'</h5>';
   

this.Prioridad=+p;
   this.actividad.des_actividad=this.DescripcionA;
    var cuerpo1='<h5 class="card-title " style="align-content: center;"  > hora inicial es: '+this.actividad.HoraIn+" hora Final es: "+this.actividad.HoraFn+'</h5>';
    var cuerpo='<h6 class="card-title " style="align-content: center;"  >'+this.actividad.des_actividad+'</h6>';

alert(this.Prioridad);
  this.actividad.id_prioridad=this.Prioridad;

if(this.dia==1){
         if(this.actividad.id_prioridad===1)
                      {
                      var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>'; 
                      $('#cuerpoT').append(botonP);
                      this.Prioridad=0;
                      }
        if(this.actividad.id_prioridad===2)
                      {
                      var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
                      $('#cuerpoT').append(botonP);
                      this.Prioridad=0;
                      }
        if(this.actividad.id_prioridad===3)
                      {
                      var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
                      $('#cuerpoT').append(botonP);
                      this.Prioridad=0;
                      }
      $('#pruebaN').append(input); 
      $('#cuerpoT').append(cuerpo1); 
      $('#cuerpoT').append(cuerpo); 
       this.Prioridad=0;
}
if(this.dia==2){
      if(this.actividad.id_prioridad==1)
          {
          var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>';  
          $('#cuerpoT2').append(botonP);
          this.Prioridad=0;
          }
      if(this.actividad.id_prioridad==2)
          {
          var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';   
          $('#cuerpoT2').append(botonP);
          this.Prioridad=0;
          }
      if(this.actividad.id_prioridad==3)
          {
          var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
          $('#cuerpoT2').append(botonP);
          this.Prioridad=0;
          }
      $('#pruebaN2').append(input); 
      $('#cuerpoT2').append(cuerpo1); 
      $('#cuerpoT2').append(cuerpo); 
       this.Prioridad=0;
}
if(this.dia==3){
      if(this.actividad.id_prioridad==1)
        {
        var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>';
            $('#cuerpoT3').append(botonP); 
            this.Prioridad=0;
        }
      if(this.actividad.id_prioridad==2)
        {
        var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
          $('#cuerpoT3').append(botonP);  
          this.Prioridad=0;
        }
    if(this.actividad.id_prioridad==3)
        {
        var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
        $('#cuerpoT3').append(botonP); 
        this.Prioridad=0;
        }
      $('#pruebaN3').append(input); 
      $('#cuerpoT3').append(cuerpo1); 
      $('#cuerpoT3').append(cuerpo); 
     
    
}
if(this.dia==4){
      if(this.actividad.id_prioridad==1)
{

var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>';
   
$('#cuerpoT4').append(botonP); 
this.Prioridad=0;
}
if(this.actividad.id_prioridad==2)
{
  

var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
   
$('#cuerpoT4').append(botonP); 
this.Prioridad=0;
}
if(this.actividad.id_prioridad==3)
{

var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
$('#cuerpoT4').append(botonP); 
this.Prioridad=0;
}
      $('#pruebaN4').append(input); 
      $('#cuerpoT4').append(cuerpo1); 
      $('#cuerpoT4').append(cuerpo); 
      
}
if(this.dia==5){
      if(this.actividad.id_prioridad==1)
{

var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>';
   
  $('#cuerpoT5').append(botonP); 
  this.Prioridad=0;
}
if(this.actividad.id_prioridad==2)
{
  

var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
   
  $('#cuerpoT5').append(botonP);
  this.Prioridad=0; 
}
if(this.actividad.id_prioridad==3)
{

var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
  $('#cuerpoT5').append(botonP); 
  this.Prioridad=0;
}
      $('#pruebaN5').append(input); 
      $('#cuerpoT5').append(cuerpo1); 
      $('#cuerpoT5').append(cuerpo); 
    
}
if(this.dia==6){
      if(this.actividad.id_prioridad==1)
{

var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>';
   
$('#cuerpoT6').append(botonP);
this.Prioridad=0;
}
if(this.actividad.id_prioridad==2)
{
  

var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
   
$('#cuerpoT6').append(botonP);
this.Prioridad=0;
}
if(this.actividad.id_prioridad==3)
{

var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
$('#cuerpoT6').append(botonP);
this.Prioridad=0;
}
      $('#pruebaN6').append(input); 
      $('#cuerpoT6').append(cuerpo1); 
      $('#cuerpoT6').append(cuerpo); 
       this.Prioridad=0;
}
if(this.dia==7){
      if(this.actividad.id_prioridad==1)
{

var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>';
   
$('#cuerpoT7').append(botonP); 
this.Prioridad=0;
}
if(this.actividad.id_prioridad==2)
{
  
var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
   
$('#cuerpoT7').append(botonP); 
this.Prioridad=0;
}
if(this.actividad.id_prioridad==3)
{

var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
$('#cuerpoT7').append(botonP); 
this.Prioridad=0;
}
      $('#pruebaN7').append(input); 
      $('#cuerpoT7').append(cuerpo1);
      $('#cuerpoT7').append(cuerpo); 
       
}
this.contadorT=this.contadorT+1;
this.actividad.id_actividad=this.contadorT;
this.diaA();
this.crearActividad();
  this.NombreA="";
  this.HorasA=0;
  this.HorasF=0;
  this.DescripcionA="";
  this.Prioridad=0 ;
}else{
  this.agregarD();
}
  }

  diaA(){
if(this.dia==1){
this.actividad.dia_actividad="lunes";
}
if(this.dia==2){
this.actividad.dia_actividad="martes";
}
if(this.dia==3){
this.actividad.dia_actividad="miercoles";
}
if(this.dia==4){
this.actividad.dia_actividad="jueves";
}
if(this.dia==5){
this.actividad.dia_actividad="viernes";
}
if(this.dia==6){
this.actividad.dia_actividad="sabado";
}
if(this.dia==7){
this.actividad.dia_actividad="domingo";
}



  }
  



  agregarD(){
  
  
    this.id=this.contadorT;
    if(this.id>=1){
 this.Prioridad=0;
 this.HorasA=0;
 this.HorasF=0;
this.actividad.nom_actividad=this.NombreA;
var HoraIn=$('select#exampleFormControlSelect1').val();;
  var HoraFn=$('select#exampleFormControlSelect2').val();;
  this.HorasA=+HoraIn;
this.actividad.HoraIn=this.HorasA;
this.HorasF=+HoraFn;
this.actividad.HoraFn=this.HorasF;
var p=$('select#exampleFormControlSelect3').val();
    var input='<h5 class="card-title " style="align-content: center;" id="pruebaN" >'+this.actividad.nom_actividad+'</h5>';   
this.Prioridad=+p;
this.actividad.id_prioridad=this.Prioridad;
   this.actividad.des_actividad=this.DescripcionA;
   var cuerpo='<button type="button" class="btn btn-danger btn-circle btn-lg" (click)="eliminar()" id="'+this.id+'"><i class="fa fa-trash "></i></button>';

    var cuerpo1='<h5 class="card-title " style="align-content: center;"  > hora inicial es: '+this.actividad.HoraIn+" hora Final es: "+this.actividad.HoraFn+'</h5>';
    var cuerpot='<h6 class="card-title " style="align-content: center;"  >'+this.actividad.des_actividad+'</h6>';

   if (this.dia==1){
                $("<div>", {
                    'class': 'card',
                    'style':'width: 18rem; position:"absolute" ; top:"10px"; left:"50px ";',
                    'id':'miprueba'
                }).append(
                      $('<div>', {
                          'class': 'card-header card-header-danger',
                          'id':this.id
                            
                      })).appendTo('#probando1');

                     
var cuerpo3='<div class="card-body" id="'+this.id+'body" ></div>';

$('#miprueba').append(cuerpo3);                      


$('#'+this.id+'').append(input);
$('#'+this.id+'body').append(cuerpo1);
this.crearActividad();
this.NombreA="";
  this.HorasA=0;
  this.HorasF=0;
  this.DescripcionA="";
  this.Prioridad=0 ;
if(this.actividad.id_prioridad===1)
                      {
                      var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>'; 
                      $('#'+this.id+'body').append(botonP);
                      this.Prioridad=0;
                      }
        if(this.actividad.id_prioridad===2)
                      {
                      var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
                      $('#'+this.id+'body').append(botonP);
                      this.Prioridad=0;
                      }
        if(this.actividad.id_prioridad===3)
                      {
                      var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
                      $('#'+this.id+'body').append(botonP);
                      this.Prioridad=0;
                      }
$('#'+this.id+'body').append(cuerpot);
$('#'+this.id+'body').append(cuerpo);
this.contadorT=this.contadorT+1;
this.dia=0;
this.Prioridad=0;
   }if (this.dia==2){
$("<div>", {
                    'class': 'card',
                    'style':'width: 18rem; position:"absolute" ; top:"10px"; left:"50px ";',
                    'id':'miprueba2'
                }).append(
                      $('<div>', {
                          'class': 'card-header card-header-danger',
                          'id':this.id
                            
                      })).appendTo('#probando2');

                     

var cuerpo3='<div class="card-body" id="'+this.id+'body2" ></div>';
$('#miprueba2').append(cuerpo3);                      


$('#'+this.id+'').append(input);
$('#'+this.id+'body2').append(cuerpo1);
if(this.actividad.id_prioridad===1)
                      {
                      var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>'; 
                      $('#'+this.id+'body2').append(botonP);
                      this.Prioridad=0;
                      }
        if(this.actividad.id_prioridad===2)
                      {
                      var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
                      $('#'+this.id+'body2').append(botonP);
                      this.Prioridad=0;
                      }
        if(this.actividad.id_prioridad===3)
                      {
                      var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
                      $('#'+this.id+'body2').append(botonP);
                      this.Prioridad=0;
                      }
$('#'+this.id+'body2').append(cuerpot);
$('#'+this.id+'body2').append(cuerpo);
this.contadorT=this.contadorT+1;
this.dia=0;
this.Prioridad=0;
this.crearActividad();
this.NombreA="";
  this.HorasA=0;
  this.HorasF=0;
  this.DescripcionA="";
  this.Prioridad=0 ;
    
   }if (this.dia==3){
$("<div>", {
                    'class': 'card',
                    'style':'width: 18rem; position:"absolute" ; top:"10px"; left:"50px ";',
                    'id':'miprueba3'
                }).append(
                      $('<div>', {
                          'class': 'card-header card-header-danger',
                          'id':this.id
                            
                      })).appendTo('#probando3');

                     

var cuerpo3='<div class="card-body" id="'+this.id+'body3" ></div>';
$('#miprueba3').append(cuerpo3);                      


$('#'+this.id+'').append(input);
$('#'+this.id+'body3').append(cuerpo1);
if(this.actividad.id_prioridad===1)
                      {
                      var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>'; 
                      $('#'+this.id+'body3').append(botonP);
                      this.Prioridad=0;
                      }
        if(this.actividad.id_prioridad===2)
                      {
                      var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
                      $('#'+this.id+'body3').append(botonP);
                      this.Prioridad=0;
                      }
        if(this.actividad.id_prioridad===3)
                      {
                      var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
                      $('#'+this.id+'body3').append(botonP);
                      this.Prioridad=0;
                      }
$('#'+this.id+'body3').append(cuerpot);
$('#'+this.id+'body3').append(cuerpo);
this.contadorT=this.contadorT+1;
this.dia=0;
this.Prioridad=0;
    this.crearActividad();
this.NombreA="";
  this.HorasA=0;
  this.HorasF=0;
  this.DescripcionA="";
  this.Prioridad=0 ;
   }if (this.dia==4){
$("<div>", {
                    'class': 'card',
                    'style':'width: 18rem; position:"absolute" ; top:"10px"; left:"50px ";',
                    'id':'miprueba4'
                }).append(
                      $('<div>', {
                          'class': 'card-header card-header-danger',
                          'id':this.id
                            
                      })).appendTo('#probando4');

                     

var cuerpo3='<div class="card-body" id="'+this.id+'body4" ></div>';
$('#miprueba4').append(cuerpo3);                      


$('#'+this.id+'').append(input);
$('#'+this.id+'body4').append(cuerpo1);
if(this.actividad.id_prioridad===1)
                      {
                      var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>'; 
                      $('#'+this.id+'body4').append(botonP);
                      this.Prioridad=0;
                      }
        if(this.actividad.id_prioridad===2)
                      {
                      var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
                      $('#'+this.id+'body4').append(botonP);
                      this.Prioridad=0;
                      }
        if(this.actividad.id_prioridad===3)
                      {
                      var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
                      $('#'+this.id+'body4').append(botonP);
                      this.Prioridad=0;
                      }
$('#'+this.id+'body4').append(cuerpot);
$('#'+this.id+'body4').append(cuerpo);
this.contadorT=this.contadorT+1;
this.dia=0;
this.Prioridad=0;
this.crearActividad();
this.NombreA="";
  this.HorasA=0;
  this.HorasF=0;
  this.DescripcionA="";
  this.Prioridad=0 ;
   }if (this.dia==5){

    $("<div>", {
                    'class': 'card',
                    'style':'width: 18rem; position:"absolute" ; top:"10px"; left:"50px ";',
                    'id':'miprueba5'
                }).append(
                      $('<div>', {
                          'class': 'card-header card-header-danger',
                          'id':this.id
                            
                      })).appendTo('#probando5');

                     

var cuerpo3='<div class="card-body" id="'+this.id+'body5" ></div>';
$('#miprueba5').append(cuerpo3);                      


$('#'+this.id+'').append(input);
$('#'+this.id+'body5').append(cuerpo1);
if(this.actividad.id_prioridad===1)
                      {
                      var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>'; 
                      $('#'+this.id+'body5').append(botonP);
                      this.Prioridad=0;
                      }
        if(this.actividad.id_prioridad===2)
                      {
                      var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
                      $('#'+this.id+'body5').append(botonP);
                      this.Prioridad=0;
                      }
        if(this.actividad.id_prioridad===3)
                      {
                      var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
                      $('#'+this.id+'body5').append(botonP);
                      this.Prioridad=0;
                      }
$('#'+this.id+'body5').append(cuerpot);
$('#'+this.id+'body5').append(cuerpo);
this.contadorT=this.contadorT+1;
this.dia=0;
this.Prioridad=0;
this.crearActividad();
this.NombreA="";
  this.HorasA=0;
  this.HorasF=0;
  this.DescripcionA="";
  this.Prioridad=0 ;
   }if (this.dia==6){

   $("<div>", {
                    'class': 'card',
                    'style':'width: 18rem; position:"absolute" ; top:"10px"; left:"50px ";',
                    'id':'miprueba6'
                }).append(
                      $('<div>', {
                          'class': 'card-header card-header-danger',
                          'id':this.id
                            
                      })).appendTo('#probando6');

                     

var cuerpo3='<div class="card-body" id="'+this.id+'body6" ></div>';
$('#miprueba6').append(cuerpo3);                      


$('#'+this.id+'').append(input);
$('#'+this.id+'body6').append(cuerpo1);
if(this.actividad.id_prioridad===1)
                      {
                      var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>'; 
                      $('#'+this.id+'body6').append(botonP);
                      this.Prioridad=0;
                      }
        if(this.actividad.id_prioridad===2)
                      {
                      var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
                      $('#'+this.id+'body6').append(botonP);
                      this.Prioridad=0;
                      }
        if(this.actividad.id_prioridad===3)
                      {
                      var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
                      $('#'+this.id+'body6').append(botonP);
                      this.Prioridad=0;
                      }
$('#'+this.id+'body6').append(cuerpot);
$('#'+this.id+'body6').append(cuerpo);
this.contadorT=this.contadorT+1;
this.dia=0;
this.Prioridad=0;
this.crearActividad();
this.NombreA="";
  this.HorasA=0;
  this.HorasF=0;
  this.DescripcionA="";
  this.Prioridad=0 ;
   }if (this.dia==7){
$("<div>", {
                    'class': 'card',
                    'style':'width: 18rem; position:"absolute" ; top:"10px"; left:"50px ";',
                    'id':'miprueba7'
                }).append(
                      $('<div>', {
                          'class': 'card-header card-header-danger',
                          'id':this.id
                            
                      })).appendTo('#probando7');

                     

var cuerpo3='<div class="card-body" id="'+this.id+'body7" ></div>';
$('#miprueba7').append(cuerpo3);                      


$('#'+this.id+'').append(input);
$('#'+this.id+'body7').append(cuerpo1);
if(this.actividad.id_prioridad===1)
                      {
                      var botonP='<button type="button" class="btn btn-outline-success" (click)="prioridadB()" > Prioridad Baja</button>'; 
                      $('#'+this.id+'body7').append(botonP);
                      this.Prioridad=0;
                      }
        if(this.actividad.id_prioridad===2)
                      {
                      var botonP=' <button type="button" class="btn btn-outline-warning" (click)="prioridadM()"  > Prioridad Media</button>';
                      $('#'+this.id+'body7').append(botonP);
                      this.Prioridad=0;
                      }
        if(this.actividad.id_prioridad===3)
                      {
                      var botonP='<button type="button" class="btn btn-outline-danger  "    >Prioridad Alta</button>';
                      $('#'+this.id+'body7').append(botonP);
                      this.Prioridad=0;
                      }
$('#'+this.id+'body7').append(cuerpot);
$('#'+this.id+'body7').append(cuerpo);
this.contadorT=this.contadorT+1;
this.dia=0;
this.Prioridad=0;
this.crearActividad();
this.NombreA="";
  this.HorasA=0;
  this.HorasF=0;
  this.DescripcionA="";
  this.Prioridad=0 ;
   }
 
   
  }
  }
  

  eliminar(){
   var probando='';
    
                var oID = $('.btn btn-danger btn-circle btn-lg').attr("id");
                alert(oID);
            
alert(probando);
$('#'+this.id+'').remove();

}

  
 
crearActividad(){
  
    this.servicioActividad.agregarActividad(this.actividad)
    this.servicioActividad.addActividad(this.actividad).subscribe(
      data => {
      },
      err => console.error(err),
      () => console.log('No a cargado el post')
      )
    this.servicioActividad.setActividad(this.actividad)
  }


agregarD2(){




}
}

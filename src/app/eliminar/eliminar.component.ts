import { Component, OnInit } from '@angular/core';
import { NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  Dia: number
  Mes: number
  year: number
  HoraA: number

  constructor() { }

  ngOnInit(): void {
  }

Eliminar() {
     alert("Esta es la fecha dd/mm/aa "+this.Dia +  " / "+this.Mes+" / "+this.year );
  }


}

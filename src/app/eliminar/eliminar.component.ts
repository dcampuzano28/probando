import { Component, OnInit } from '@angular/core';
import { NgSwitchDefault } from '@angular/common';
import { ExecFileOptionsWithStringEncoding } from 'child_process';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
   Dia: ""
   HoraA:number


  constructor() { }

  ngOnInit(): void {
  }

  Eliminar() {
     alert("Esta es la fecha d "+this.Dia +  " / "+this.HoraA );
  }

}

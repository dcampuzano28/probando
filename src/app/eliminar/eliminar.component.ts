import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  NombreA:String
  constructor() { }

  ngOnInit(): void {
  }
Eliminar(){
alert(this.NombreA);

}
}

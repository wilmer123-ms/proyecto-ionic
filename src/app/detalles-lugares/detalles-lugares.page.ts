import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../lugares/lugares.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles-lugares',
  templateUrl: './detalles-lugares.page.html',
  styleUrls: ['./detalles-lugares.page.scss'],
})
export class DetallesLugaresPage implements OnInit {
  dataLugares: Array<any>;

  constructor( private lugaresService : LugaresService, private router : Router) { 
    this.dataLugares = [];
  }

  ngOnInit() {
    this.listarLugares();
   
  }
  listarLugares() {
    this.lugaresService.getHomeLugares().subscribe(
      response => {
        this.dataLugares = response;
        console.log(this.dataLugares)
      },
      error => {}
    )
  }
  atras() {
    this.router.navigate(['/lugares'])
  }

}

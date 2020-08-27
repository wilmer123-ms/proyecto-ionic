import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LugaresService } from "../lugares.service";

@Component({
  selector: "app-nuevo-lugar",
  templateUrl: "./nuevo-lugar.page.html",
  styleUrls: ["./nuevo-lugar.page.scss"],
})
export class NuevoLugarPage implements OnInit {
  constructor(private router: Router, private lugaresService: LugaresService) {}

  ngOnInit() {}
  agregraLugar(nombre, imagen) {
    this.lugaresService.getAgregar(nombre.value, imagen.value);
    this.router.navigate(['lugares'])
  }
  atras() {
    this.router.navigate(["lugares"]);
  }
}

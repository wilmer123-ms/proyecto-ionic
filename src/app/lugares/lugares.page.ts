import { Component, OnInit } from "@angular/core";
import { LugaresService } from "./lugares.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-lugares",
  templateUrl: "./lugares.page.html",
  styleUrls: ["./lugares.page.scss"],
})
export class LugaresPage implements OnInit {
  public lugares: Array<any>;

  constructor(private lugaresService: LugaresService, private router: Router) {
    this.lugares = [];
  }

  ngOnInit() {
    this.listarLugares();
  }
  ionViewWillEnter() {
    this.lugares = this.lugaresService.getLugares();
  }

  listarLugares() {
    this.lugares = this.lugaresService.getLugares();
    console.log(this.lugares);
  }
  agregarLugar() {
    this.router.navigate(["lugares/nuevo-lugar"]);
  }
  detallesLugares() {
    this.router.navigate(["/detalles-lugares"]);
  }
}

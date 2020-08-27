import { Component, OnInit } from "@angular/core";
import { LugaresService } from "../lugares.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-detalles",
  templateUrl: "./detalles.page.html",
  styleUrls: ["./detalles.page.scss"],
})
export class DetallesPage implements OnInit {
  public lugar: any;

  constructor(
    private lugaresService: LugaresService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) {
    this.lugar = {};
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.lugar = this.lugaresService.getLugar(params.lugaresId);
      console.log(this.lugar);
    });
  }
  atras() {
    this.router.navigate(["/lugares"]);
  }
  async eliminar() {
    const alertLugar = await this.alertController.create({
      header: "¿Está seguro de eliminar la pagina?",
      message: "Ten cuidado con las acciones a realizar",
      buttons: [
        {
          text: "Cancelar",
          role: "Cancelar",
        },
        {
          text: "Aceptar",
          handler: () => {
            this.lugaresService.getEliminar(this.lugar.id);
            this.router.navigate(["/lugares"]);
          },
        },
      ],
    });
     await alertLugar.present();
  }
}

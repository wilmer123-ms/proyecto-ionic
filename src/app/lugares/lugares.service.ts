import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class LugaresService {
  private lugares: ItemLugar[] = [
    {
      id: 1,
      nombre: "Machu Picchu",
      comentario: [
        "Es uno de los 7 maravillas del mundo",
        "En lugra relajante",
      ],
      imagen:
        "https://i.pinimg.com/originals/52/1c/79/521c793ed97200faaec0cfbd4243c812.png",
    },
    {
      id: 2,
      nombre: "Cajamarca",
      comentario: [
        "Una experiencia maravillosa en peru",
        " Este un lugar lindo",
        "Una experiencia maravillosa",
      ],
      imagen:
        "https://www.ytuqueplanes.com/fotos/destinos/sh-Catedral-de-Cajamarca-Cajamarca.jpg",
    },
    {
      id: 3,
      nombre: "Ica",
      comentario: [],
      imagen:
        "https://i.pinimg.com/736x/a3/f7/c1/a3f7c141c26ed16f2ccdc1a9a8cc0346.jpg",
    },
    {
      id: 4,
      nombre: "Huacho",
      comentario: [
        "Lugar donde se oculta el sol",
        "Linda etapa en la universidad",
      ],
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/6/6c/Plaza_de_Armas_-_Huacho.jpg",
    },
    {
      id: 5,
      nombre: "Huaral",
      comentario: ["Tierra que me miro nacer"],
      imagen:
        "https://turismoi.pe/uploads/photo/version2/photo_file/54590/optimized_4280-2.jpg",
    },
    {
      id: 6,
      nombre: "Lima",
      comentario: ["Ciudad de la properidad ", "Cpaitla de perú"],
      imagen:
        "https://gulliver.com.es/wp-content/uploads/2019/02/Lima.jpg",
    },
  ];

  constructor(private http :HttpClient ) {}
  getHomeLugares() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos?_limit=20')
  }

  getLugares() {
    return this.lugares;
  }
  getLugar(id: number) {
    const lugar = this.lugares.find((item) => {
      return item.id == id;
    });
    return lugar;
  }
  getAgregar(nombre: string, imagen: string) {
    this.lugares.push({
      id: this.lugares.length + 1,
      nombre: nombre,
      comentario: [],
      imagen: imagen,
    });
  }
  getEliminar(id: number) {
    const newLista = this.lugares.filter((item) => {
      return item.id !== id;
    });
    return (this.lugares = newLista);
  }
}

interface ItemLugar {
  id: number;
  nombre: string;
  comentario: any[];
  imagen: string;
}

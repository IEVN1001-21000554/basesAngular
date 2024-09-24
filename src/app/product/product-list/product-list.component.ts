import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFiter:string='';
  mostrarImagen():void{
  this.muestraImg=!this.muestraImg
  }



  productos:IProductos[]=[
    {
      "ProductoId":1,
      "Modelo":"Camaro",
      "Descripcion":"2 Puertas",
      "Year":"2021",
      "Precio":40000,
      "Color":"Azul",
      "Marca":"Chevrolet",
      "ImagenUrl":"https://www.lanacion.com.ar/resizer/v2/camar-MCO6AFTMDVDBLPLQO2RJAJOEZA.jpg?auth=32a8e7b27158ce6814d5eb5b8d5bf9c5e4aaf052de6e75bf8c1054f8668aa295&width=420&height=280&quality=70&smart=true"
    },
    {
      "ProductoId":2,
      "Modelo":"A4",
      "Descripcion":"4 Puertas",
      "Year":"marzo 12 2021",
      "Precio":120000,
      "Color":"Gris",
      "Marca":"AUDI",
      "ImagenUrl":"https://file.kelleybluebookimages.com/kbb/base/evox/CP/15034/2021-Audi-A4-front_15034_032_1970x741_T9T9_cropped.png"
    },
    {
      "ProductoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 Puertas",
      "Year":"febrero 2 2020",
      "Precio":18000,
      "Color":"Blanco",
      "Marca":"KIA",
      "ImagenUrl":"https://http2.mlstatic.com/D_NQ_NP_624789-MLM77736833604_072024-O.webp"
    }
  ]
}

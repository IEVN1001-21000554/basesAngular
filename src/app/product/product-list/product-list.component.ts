import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  mostrarImagen():void{
  this.muestraImg=!this.muestraImg
  }

  productos:any[]=[
    {
      "ProductoId":1,
      "Modelo":"Sentra",
      "Descripcion":"2 Puertas",
      "Year":"febrero 2 2020",
      "Precio":20000,
      "Color":"Blanco",
      "Marca":"Nissan",
      "ImagenUrl":"https://autoprice.com.mx/imgs/fotos/3622/98b4fced9c8c47a7_ap.jpg"
    },
    {
      "ProductoId":2,
      "Modelo":"A4",
      "Descripcion":"4 Puertas",
      "Year":"marzo 12 2021",
      "Precio":120000,
      "Color":"Blanco",
      "Marca":"AUDI",
      "ImagenUrl":"https://file.kelleybluebookimages.com/kbb/base/evox/CP/15034/2021-Audi-A4-front_15034_032_1970x741_T9T9_cropped.png"
    },
    {
      "ProductoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 Puertas",
      "Year":"febrero 2 2020",
      "Precio":18000,
      "Color":"Azul",
      "Marca":"KIA",
      "ImagenUrl":"https://http2.mlstatic.com/D_NQ_NP_624789-MLM77736833604_072024-O.webp"
    }
  ]
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-practicap1',
  // templateUrl: './ejemplo1.component.html',
  templateUrl: './practicap1.component.html',
  styleUrl: './practicap1.component.css'
})
export class Ejemplo1Component implements OnInit{
    formulario!: FormGroup;
    resultado:number=0;
    resultado2:number=0;
    nombreC: string = '';
    anios: number = 0;
    signo: string = '';
    imagen:string='';
    signosChinos: string[] = [
      'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragon', 'Serpiente', 
      'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'
    ];

    imagenesSignos: { [key: string]: string } = {
      'Rata': 'https://www.clarin.com/img/2019/11/07/dYEoQZR1_1256x620__1.jpg',
      'Buey': 'https://www.clarin.com/img/2019/11/07/7Stk4ozR_1256x620__1.jpg',
      'Tigre': 'https://www.clarin.com/img/2019/11/07/uGGFO0AL_1256x620__1.jpg',
      'Conejo': 'https://www.clarin.com/img/2019/11/07/vQ_hjIAx_1256x620__1.jpg',
      'Dragon': 'https://www.clarin.com/img/2019/11/07/527JMh0C_1256x620__1.jpg',
      'Serpiente': 'https://www.clarin.com/img/2019/11/07/k5StzBC5_1256x620__1.jpg',
      'Caballo': 'https://www.clarin.com/img/2019/11/07/lgo7KfuE_1256x620__1.jpg',
      'Cabra': 'https://www.clarin.com/img/2019/11/07/SXAqxMwA_1256x620__1.jpg',
      'Mono': 'https://www.clarin.com/img/2019/11/07/SsWZ5w8S_1256x620__1.jpg',
      'Gallo': 'https://www.clarin.com/img/2019/11/07/_fkAEN_n_1256x620__1.jpg',
      'Perro': 'https://www.clarin.com/img/2019/11/07/nwKaI1UW_1256x620__1.jpg',
      'Cerdo': 'https://www.clarin.com/img/2019/11/07/4lfKnT3M_1256x620__1.jpg',
    };

  constructor(){}
  ngOnInit(): void {
    this.formulario=new FormGroup({
      // numero1: new FormControl('', Validators.required),
      // numero2: new FormControl('', Validators.required),
      // coordenadaAx: new FormControl('', Validators.required),
      // coordenadaAy: new FormControl('', Validators.required),
      // coordenadaBx: new FormControl('', Validators.required),
      // coordenadaBy: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      aPaterno: new FormControl('', Validators.required),
      aMaterno: new FormControl('', Validators.required),
      dia: new FormControl('', Validators.required),
      mes: new FormControl('', Validators.required),
      anio: new FormControl('', Validators.required),
    })
  }
  // sumarNumeros():void{
  //   const numero1=this.formulario.get('numero1')?.value;
  //   const numero2=this.formulario.get('numero2')?.value;
  //   this.resultado=numero1+numero2;
  // }
  // calcularCoordenadas():void{
  //   const coordenadaAx=this.formulario.get('coordenadaAx')?.value;
  //   const coordenadaAy=this.formulario.get('coordenadaAy')?.value;
  //   const coordenadaBx=this.formulario.get('coordenadaBx')?.value;
  //   const coordenadaBy=this.formulario.get('coordenadaBy')?.value;
  //   const dx = coordenadaBx - coordenadaAx;
  //   const dy = coordenadaBy - coordenadaAy;
  //   this.resultado2=Math.sqrt((dx)**2 + (dy)**2);
  // }
  calcularSigno(): void {
    const nombre = this.formulario.get('nombre')?.value;
    const aPaterno = this.formulario.get('aPaterno')?.value;
    const aMaterno = this.formulario.get('aMaterno')?.value;
    const dia = this.formulario.get('dia')?.value;
    const mes = this.formulario.get('mes')?.value;
    const anio = this.formulario.get('anio')?.value;

    this.nombreC = `${nombre} ${aPaterno} ${aMaterno}`;

    const fechaNacimiento = new Date(anio, mes - 1, dia);
    const edadDifMs = Date.now() - fechaNacimiento.getTime();
    const edadDate = new Date(edadDifMs);
    this.anios = Math.abs(edadDate.getFullYear() - 1970);

    const indiceSigno = (anio - 4) % 12;
    this.signo = this.signosChinos[indiceSigno];
    this.imagen = this.imagenesSignos[this.signo];
  }
}

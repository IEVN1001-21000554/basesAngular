import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo1',
  // templateUrl: './ejemplo1.component.html',
  templateUrl: './distancia.component.html',
  styleUrl: './ejemplo1.component.css'
})
export class Ejemplo1Component implements OnInit{
  formulario!: FormGroup;
  resultado:number=0;
  resultado2:number=0;
  constructor(){}
  ngOnInit(): void {
    this.formulario=new FormGroup({
      numero1: new FormControl('', Validators.required),
      numero2: new FormControl('', Validators.required),
      coordenadaAx: new FormControl('', Validators.required),
      coordenadaAy: new FormControl('', Validators.required),
      coordenadaBx: new FormControl('', Validators.required),
      coordenadaBy: new FormControl('', Validators.required)
    })
  }
  sumarNumeros():void{
    const numero1=this.formulario.get('numero1')?.value;
    const numero2=this.formulario.get('numero2')?.value;
    this.resultado=numero1+numero2;
  }
  calcularCoordenadas():void{
    const coordenadaAx=this.formulario.get('coordenadaAx')?.value;
    const coordenadaAy=this.formulario.get('coordenadaAy')?.value;
    const coordenadaBx=this.formulario.get('coordenadaBx')?.value;
    const coordenadaBy=this.formulario.get('coordenadaBy')?.value;
    const dx = coordenadaBx - coordenadaAx;
    const dy = coordenadaBy - coordenadaAy;
    this.resultado2=Math.sqrt((dx)**2 + (dy)**2);
  }
}

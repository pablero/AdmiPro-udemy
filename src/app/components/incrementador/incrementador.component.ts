import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda';
  @Output() cambioValor: EventEmitter <number> = new EventEmitter();
  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() {
   }

  ngOnInit(): void {

  }

  onChanges(newValor: number){
    /* console.log(this.txtProgress); */
    /* const elemHTML: any = document.getElementsByName('progreso')[0];
    */
    if (newValor >= 100) {
      this.progreso = 100;
    }else if ( newValor <= 0) {
      this.progreso = 0;
    }else {
      this.progreso = newValor;
    }
    /* elemHTML.value = this.progreso; */
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number){
    if (this.progreso >= 100 && valor > 0){
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

}

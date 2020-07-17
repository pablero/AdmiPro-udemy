import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscripcion: Subscription;

  constructor() {
    this.suscripcion = this.regresaObservable()
    .subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el obs', error),
      () => console.log('El observador terminó!')
      );
   }

   regresaObservable(): Observable<any>{
     return new Observable((observer: Subscriber<any>) => {
      let incrementador = 0;
      const intervalo = setInterval(() => {
      incrementador += 1;

      const salida = {
        valor: incrementador
      };

      observer.next(salida);
     /*  if (incrementador === 3){
        clearInterval(intervalo);
        observer.complete();
      } */
      /* if (incrementador === 2){
        clearInterval(intervalo);
        observer.error('Incrementador en 2');
      } */
      }, 1000);
     }).pipe(
       map(resp => resp.valor),
       filter ((valor, index) => {
        if ( (valor % 2) === 1){
          // valor impar
          return true;
        }
        else {
          // valor par
          return false;
        }
       })
       );
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  console.log('La página se va a cerrar!');
  this.suscripcion.unsubscribe();
  }
}

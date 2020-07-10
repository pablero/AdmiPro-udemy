import { Component, OnInit } from '@angular/core';


import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(public servicioSetting: SettingsService) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any){
    this.aplicarCheck(link);
    this.servicioSetting.aplicarTema(tema);
  }

  aplicarCheck(link: any){
      const selectores: any = document.getElementsByClassName('selector');

      for (const ref of selectores){
        ref.classList.remove('working');
      }

      link.classList.add('working');
  }

  colocarCheck(){
    const tema = this.servicioSetting.ajustes.tema;
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores){
      if (ref.getAttribute('data-theme') === tema){
        ref.classList.add('working');
        break;
      }
    }
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SettingsService, ShareService, SidebarService} from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    ShareService,
    SidebarService
  ]
})
export class ServiceModule { }

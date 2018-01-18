import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestformPage } from './requestform';

@NgModule({
  declarations: [
    RequestformPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestformPage),
  ],
})
export class RequestformPageModule {}

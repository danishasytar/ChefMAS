import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotfoodPage } from './hotfood';

@NgModule({
  declarations: [
    HotfoodPage,
  ],
  imports: [
    IonicPageModule.forChild(HotfoodPage),
  ],
})
export class HotfoodPageModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RequestformPage } from '../pages/requestform/requestform';
import { HotfoodPage } from '../pages/hotfood/hotfood';
import { AdditionalorderPage } from '../pages/additionalorder/additionalorder';
import { InventoryPage } from '../pages/inventory/inventory';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { Device} from '@ionic-native/device';
import { HTTP} from '@ionic-native/http';
import { HttpClientModule } from '@angular/common/http';

import { OneSignal } from '@ionic-native/onesignal';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RequestformPage,
    HotfoodPage,
    AdditionalorderPage,
    InventoryPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RequestformPage,
    HotfoodPage,
    AdditionalorderPage,
    InventoryPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    OneSignal
  ]
})
export class AppModule {}

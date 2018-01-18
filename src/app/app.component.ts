import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { OneSignal } from '@ionic-native/onesignal';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public oneSignal:OneSignal, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Lounge', component: HomePage },
      { title: 'Passenger Order', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

            if(this.platform.is('mobileweb')){
                console.log('on web')
            }
            else if(this.platform.is('android')){
                console.log('on android')
                this.initOneSignal();
            }
            else if(this.platform.is('ios')){
                console.log('on ios')
                this.initOneSignal();
            }
    });
  }

    initOneSignal(){
        this.oneSignal.startInit('157c1623-1c64-4755-b120-e8aab8087e7a', '752233153667');

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

        this.oneSignal.handleNotificationReceived().subscribe(() => {
         // do something when notification is received
        });

        this.oneSignal.handleNotificationOpened().subscribe(() => {
          // do something when a notification is opened
        });
        this.oneSignal.getIds().then(res=>{
            window.localStorage.setItem('player_id', res.userId)
            console.log(window.localStorage.getItem('player_id'));
        })



        this.oneSignal.handleNotificationReceived().subscribe(() => {
          // do something when a notification is opened
          console.log("HAHAHAAHA")
        });


        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification)
        this.oneSignal.endInit();
    }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

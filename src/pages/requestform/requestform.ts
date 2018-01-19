import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HotfoodPage } from '../hotfood/hotfood';
import { AdditionalorderPage } from '../additionalorder/additionalorder';

/**
 * Generated class for the RequestformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requestform',
  templateUrl: 'requestform.html',
})
export class RequestformPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestformPage');
  }


  hotFood(){
  	console.log("hotfood")
  	this.navCtrl.push(HotfoodPage);
  }

  addOrder(){
  	console.log("addorder")
  	this.navCtrl.push(AdditionalorderPage);

  }

}

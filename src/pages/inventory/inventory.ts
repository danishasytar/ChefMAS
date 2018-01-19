import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {

	hashbrown = { 'count':0};
	minipau = { 'count':0};
	dimsum = { 'count':0};
	watermelon = { 'count':0};
	honeydew = { 'count':0};


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InventoryPage');
  }


  add(item){
	console.log(item)  	
  	item.count++;
  }

  remove(item){
  	if(item.count == 0) 
  		return;
  	item.count--;
  }

}

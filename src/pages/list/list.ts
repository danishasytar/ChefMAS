import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  list;

  constructor(public loadingCtrl:LoadingController, public api:ApiProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getdata();
  }


  getdata(){
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();
    this.api.getdata('/api/passenger_order/', {})
       .then(data => {
         loading.dismiss();
         this.list = data
         console.log(data)
         for(let i = 0;i<this.list.length;i++){
           this.list[i].passenger_order = (this.list[i].passenger_order).split("|");
         } 
          }, err => {
           loading.dismiss();
            console.log(err);
          });
  }
}

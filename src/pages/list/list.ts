import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  list;

  constructor(public api:ApiProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getdata();
  }


  getdata(){
    this.api.getdata('/api/passenger_order/', {})
       .then(data => {

         console.log(data)
         // for(let i = 0;i<data.length;i++){
         //   data[i].passenger_order = (data[i].passenger_order).split("|");
         // } 
         this.list = data;
          }, err => {
            console.log(err);
          });
  }
}

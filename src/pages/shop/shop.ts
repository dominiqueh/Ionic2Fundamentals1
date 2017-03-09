import { Component, OnInit } from '@angular/core';

import { NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage implements OnInit {
  product: string;

  constructor(public  navParams: NavParams,
                      navCtrl: NavController) {}

  onGoToBuyout(){
    this.navCtrl.push(productName);
  }

  onGoBack(){
    this.navCtrl.popToRoot();
  }
}

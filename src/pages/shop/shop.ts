import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { BuyoutPage } from "../buy/buyout";

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  constructor(public navCtrl: NavController) {}

  onGoToBuyout(){
    this.navCtrl.push(BuyoutPage);
  }

}

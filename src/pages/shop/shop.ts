import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BuyoutPage } from '../buyout/buyout';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {
  constructor(private navCtrl: NavController) {}

  onLoadProduct( productData:{product:string}) {
    this.navCtrl.push(BuyoutPage, productData);
  }
}

import { Component, OnInit } from '@angular/core';

import { NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {
  product: string;

  constructor(public  navParams: NavParams,
                      navCtrl: NavController) {}
}

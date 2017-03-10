import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { NavController } from "ionic-angular";

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})

export class BuyoutPage {

  productData: {product:string};

  constructor ( private navParams: NavParams,
                private navCtrl: NavController){
        this.productData = this.navParams.data;
                }

  onGoHome(){
    this.navCtrl.popToRoot();
  }
}

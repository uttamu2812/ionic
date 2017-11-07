import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  source:any;
  destination:any;
  sourceCode:any;
  destinationCode:any;
  travelData: any;
  logoimg:any;
  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
    this.destination=navParams.get('destination');
    this.source=navParams.get('source');
    this.sourceCode=navParams.get('sourceCode');
    this.destinationCode=navParams.get('destinationCode');
    this.travelData=navParams.get('travelData');
    this.logoimg=navParams.get('logoimg');
  }

}

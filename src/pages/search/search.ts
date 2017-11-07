import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';

import { Item } from '../../models/item';
import { Flight } from '../../models/flight';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  sourceAirportList:any = [];
  destinationAirportList:any = [];
  flightDetails:Flight[]=[];
  source:any;
  destination:any;
  sourceCode:any;
  destinationCode:any;
  sourceObj:Item;
  destinationObj:Item;
  travelData: any;
  datesGiven:boolean;
  searchWidget:boolean;
  logoimg:any;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController,public navParams: NavParams, public items: Items) { 
    this.datesGiven=false;
    this.searchWidget=true;
    this.travelData=this.getCurrentDate();
    console.log(this.travelData);
    
  }

 getCurrentDate() {
    var date = new Date(),
        mnth = ("0" + (date.getMonth()+1)).slice(-2),
        day  = ("0" + date.getDate()).slice(-2);
    return [ date.getFullYear(), mnth, day ].join("-");
}
  /**
   * Perform a service for the proper items.
   */
  getSourceAirportList(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.sourceAirportList = [];
      return;
    }

     this.items.getAirports().subscribe((resp) => {
  this.sourceAirportList=resp["airports"].filter((item) => {
      
        let field = item["name"];
        if (field.toLowerCase().indexOf(val.toLowerCase()) >= 0) {
          return item;
        } else if (field == val) {
          return item;
        }
      
      return null;
    });
    }, (err) => {
      //this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: err,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });


    /*this.sourceAirportList = this.items.getAirports({
      name: val
    });*/
  }

    getDestinationAirportList(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.destinationAirportList = [];
      return;
    }
     this.items.getAirports().subscribe((resp) => {
        this.destinationAirportList=resp["airports"].filter((item) => {
      
        let field = item["name"];
        if (field.toLowerCase().indexOf(val.toLowerCase()) >= 0) {
          return item;
        } else if (field == val) {
          return item;
        }
      
      return null;
    });
    }, (err) => {
      //this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: err,
        duration: 3000,
        position: 'top'
      });
      toast.present();
  
    });

   /* this.destinationAirportList = this.items.getAirports({
      name: val
    });*/
  }
/*selectSource*/

selectSource(item: Item){
  this.sourceObj=item;
  this.source=item["name"];
  this.sourceAirportList = [];
}
selectDestination(item: Item){
  this.destinationObj=item;
  this.destination=item["name"];
  this.destinationAirportList = [];
}

searchFlight(){
this.sourceCode=this.sourceObj["code"]
this.destinationCode=this.destinationObj["code"];
this.searchWidget=false;
this.items.getFlightList().subscribe((resp) => {
  
   this.flightDetails=resp["FareInfo"];
      console.log(this.flightDetails);
    }, (err) => {
      //this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: err,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });

}
  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: any) {
    this.navCtrl.push('ItemDetailPage', {
      item: item,
      logoimg:'assets/img/SY.png',
      source:this.source,
      destination:this.destination,
      sourceCode:this.sourceCode,
      destinationCode:this.destinationCode,
      travelData: this.travelData
    });
  }

}

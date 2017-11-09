import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { Flight } from '../../models/flight';
import { Flights } from '../../providers/providers';

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
  sourceObj:Flight;
  destinationObj:Flight;
  travelDate: any;
  datesGiven:boolean;
  searchWidget:boolean;
  logoimg:any;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController,public navParams: NavParams, public flights: Flights) { 
    this.datesGiven=false;
    this.searchWidget=true;
    this.travelDate=this.getCurrentDate();
    
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

     this.flights.getAirports(val).subscribe((resp) => {
       console.log(resp);
      this.sourceAirportList=resp;

    }, (err) => {
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
     this.flights.getAirports(val).subscribe((resp) => {
        console.log(resp);
        this.destinationAirportList=resp;
    }, (err) => {
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

selectSource(item: any){
  this.sourceObj=item;
  this.source=item["airportName"];
  this.sourceAirportList = [];
}
selectDestination(item: any){
  this.destinationObj=item;
  this.destination=item["airportName"];
  this.destinationAirportList = [];
}

searchFlight(){
this.sourceCode=this.sourceObj["airportCode"]
this.destinationCode=this.destinationObj["airportCode"];
this.searchWidget=false;

this.flights.getFlightList(this.sourceCode,this.destinationCode,this.travelDate).subscribe((resp) => {
  
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
      travelDate: this.travelDate
    });
  }

}

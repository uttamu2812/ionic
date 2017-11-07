import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Item } from '../../models/item';
import { Flight } from '../../models/flight';
import { Api } from '../api/api';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()
export class Items {

airportList:	Item[] = [];
    defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };
  constructor(public api: Api,private http:HttpClient) {

   }


  getAirports(){
    
    
    return this.http.get('/assets/data/airport.json');
  
  }
  query(params?: any) {
    return this.api.get('/items', params);
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }
getFlightList(){
 return this.http.get('/assets/data/flight.json');
}
/*getFlightList(): Observable<Flight>{
 return this.http.get('/assets/data/flight.json').map((response:Response) => response.json());
}*/
}

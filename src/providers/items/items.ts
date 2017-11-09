import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Item } from '../../models/item';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()
export class Items {

  constructor(private http:HttpClient) {

   }


  getRecommendedList(){
    return this.http.get('/assets/data/recommended.json');
    }



/*getFlightList(): Observable<Flight>{
 return this.http.get('/assets/data/flight.json').map((response:Response) => response.json());
}*/
}

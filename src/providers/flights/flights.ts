import { Injectable } from '@angular/core';
/*import { HttpClient, HttpParams } from '@angular/common/http';*/
 import { Http, Response, Headers, RequestOptions } from '@angular/http' 
import { Flight } from '../../models/flight';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class Flights {



  constructor(private http:Http) {

   }


  getAirports(name:String):Observable<any>{

   return this.http.get('http://10.255.134.243:9020/airShop/airports/search/'+name).map((response:Response) => response.json());
 
}

getFlightList(source:String,destination:String,date:String):Observable<any>{
 return this.http.get('http://10.255.134.243:9020/airShop/search/'+source+'/'+destination+'/'+date).map((response:Response) => response.json());
}

/*getFlightList(): Observable<Flight>{
 return this.http.get('/assets/data/flight.json').map((response:Response) => response.json());
}
http://10.255.134.243:9010/airShop/search/LAX/ORD/2017-11-07
*/
}

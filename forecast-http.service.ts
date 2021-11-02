import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ForecastHttpService {
  constructor( private http: HttpClient ) {
  }
 
  getWeather(lat:number, lon:number): Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&APPID=9a71814e73ecca3dd1fb75334c9fd709`)
  }
}
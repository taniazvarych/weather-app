import {Component, OnInit} from '@angular/core';
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import { ForecastHttpService } from 'forecast-http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Weather } from './weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public appearance = Appearance;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;
  public weather$: Observable<Weather[]>;

  constructor(private forecastHttpService: ForecastHttpService) {
  }

  ngOnInit() {
    this.setCurrentPosition();
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
        this.getWeather(position.coords.latitude, position.coords.longitude)
      });
    }
  }

  onLocationSelected(location: Location) {
    this.latitude = location.latitude;
    this.longitude = location.longitude;
    this.getWeather(location.latitude, location.longitude)
  }

  onMouseClick(_: any) {
    this.latitude = _.coords.lat;
    this.longitude = _.coords.lng;
    this.getWeather( _.coords.lat,  _.coords.lng)
  }

  getWeather(lat: number, lon: number) {
    this.weather$ = this.forecastHttpService.getWeather(lat, lon)
      .pipe(
        map((res: any)=> res.daily)
      );
  }

}

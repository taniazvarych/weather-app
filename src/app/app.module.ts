import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { ForecastHttpService } from 'forecast-http.service';
import { TemperatureConverterPipe } from './daily-weather/temper.pipe';
import { AppComponent } from './app.component';
import { DailyWeatherComponent } from './daily-weather/daily-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyWeatherComponent,
    TemperatureConverterPipe,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4aIb6YZmVm-Y9_gDSQZfgbTlrdRFMSo8',
      libraries: ['places'],
      language: 'ukr'
    }),
    MatGoogleMapsAutocompleteModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [ForecastHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

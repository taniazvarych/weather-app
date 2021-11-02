import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../weather';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss']
})
export class DailyWeatherComponent implements OnInit {
  @Input() weather: Weather
  constructor() { }

  ngOnInit(): void {
  }

}

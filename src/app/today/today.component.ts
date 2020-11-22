import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  weather;

  constructor(private weatherService:WeatherService) { }

  ngOnInit(): void {
  }

  getCity(city){
    this.weatherService.getWeatherByCity(city).subscribe(data=>{
      this.weather=data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  WeatherData:any;
  lat;
  lon;
  weather;

  constructor() { }

  ngOnInit(): void {
    this.getLocation();
    this.getWeatherData();
    console.log(this.WeatherData)
  }

  getLocation(){
    if("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success)=>{
        this.lat=success.coords.latitude;
        this.lon=success.coords.longitude;
      })
    }
  }

  getWeatherData() {
    let data = JSON.parse('{"coord":{"lon":86.18,"lat":22.8},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"}],"base":"stations","main":{"temp":300.15,"feels_like":299.09,"temp_min":300.15,"temp_max":300.15,"pressure":1014,"humidity":34},"visibility":3000,"wind":{"speed":1.5,"deg":100},"clouds":{"all":0},"dt":1606034784,"sys":{"type":1,"id":9121,"country":"IN","sunrise":1606005197,"sunset":1606044598},"timezone":19800,"id":1269300,"name":"Chennai","cod":200}')
    this.setWeatherData(data)
  }

  setWeatherData(data) {
    this.WeatherData=data;
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0)
    this.WeatherData.temp_min=(this.WeatherData.main.temp_min - 273.15).toFixed(0)
    this.WeatherData.temp_max=(this.WeatherData.main.temp_max - 273.15).toFixed(0)
  }

}

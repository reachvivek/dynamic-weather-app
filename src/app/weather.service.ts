import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url: "https://api.openweathermap.org/data/2.5/weather";
  apiKey: "282ed2a6f570bc53fa4706567169e068";
  constructor(private http: HttpClient) { 

  }

  getWeatherByLoc(lat, lon) {
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lon)
    .set('units', 'imperial')
    .set('appid', this.apiKey)
    return this.http.get(this.url, {params});
  }

  getWeatherByCity(city: string) {
    let params = new HttpParams()
    .set('q', city)
    .set('units', 'imperial')
    .set('appid', this.apiKey)

    return this.http.get(this.url, {params});
  }
}

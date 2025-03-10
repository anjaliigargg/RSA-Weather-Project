import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '5796abbde9106b7da4febfae8c44c232';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private lanLonUrl = 'https://api.openweathermap.org/geo/1.0/direct';
  private forecastApiUrl = 'https://api.openweathermap.org/data/3.0/onecall';
  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<any> {
    return this.http.get(this.apiUrl+"weather?q="+city+"&appid="+this.apiKey+"&units=metric");
  }

  getLanLon(city: string): Observable<any> {
    return this.http.get(this.lanLonUrl +"?q="+ city +"&limit=1&appid=" + this.apiKey);
  }


  getForecast(lat: number, lon: number): Observable<any> {
    return this.http.get(this.forecastApiUrl +"?lat=" + lat +"&lon=" + lon + "&appid=" +this.apiKey + "&units=metric");
  }
}

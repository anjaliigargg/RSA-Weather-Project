import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-weather-forecast',
    standalone: true,
    imports: [CommonModule,FormsModule],
    templateUrl: './weather-forecast.component.html',
    styleUrl: './weather-forecast.component.scss'
})
export class WeatherForecastComponent {
  city = '';
  forecastData: any;
  error = '';
  constructor(private route: ActivatedRoute, private weatherService: WeatherService, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params['city']) {
        this.city = params['city'];
      }
      this.getWeather();
    });
  }
  
  getWeather() {
    this.weatherService.getLanLon(this.city).subscribe(response => {
      if (response.length > 0) {
        console.log("response::", response);
        const { lat, lon } = response[0];
        this.weatherService.getForecast(lat, lon).subscribe(data => {
          console.log("response1::", data);
          this.forecastData = data.daily.map((item: any) => ({
            date: new Date(item.dt * 1000).toLocaleDateString('en-GB', { 
              day: 'numeric', 
              month: 'short', 
              year: 'numeric' 
            }),
            temp: item.temp.day,
            minTemp: item.temp.min,
            maxTemp: item.temp.max,
            humidity: item.humidity,
            weather: item.weather[0].description,
            cloud: item.clouds,
            wind : item.wind_speed,
          }));
        });
      } else {
        this.error = "Error Occured";
      }
    });
  }
  
  goback(){
    this.router.navigate(['/weather']);
  }
}

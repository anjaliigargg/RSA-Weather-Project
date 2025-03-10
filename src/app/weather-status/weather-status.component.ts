import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-weather-status',
    standalone: true,
    imports: [CommonModule,FormsModule],
    templateUrl: './weather-status.component.html',
    styleUrl: './weather-status.component.scss'
})
export class WeatherStatusComponent {
  city = '';
  weatherData: any;
  error = '';

  constructor(private weatherService: WeatherService,private router: Router) {
  }

  getWeather() {
    if (!this.city) {
      this.error = "Please provide an input";
      return;
    }
    this.error = "";
    this.weatherService.getCurrentWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: () => {
        this.error = "Invalid input";
      }
    });
  }
  
  navigateToForecast() {
    this.router.navigate(['/forecast'], {queryParams:{city:this.city}});
  }
}

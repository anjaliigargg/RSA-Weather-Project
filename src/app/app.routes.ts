import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WeatherStatusComponent } from './weather-status/weather-status.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginpageComponent },
    { path: 'weather', component: WeatherStatusComponent },
    { path: 'forecast', component: WeatherForecastComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule,BrowserModule],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}

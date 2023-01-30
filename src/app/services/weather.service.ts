import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  /* creates a connection to the httpClient via app.module
     creates a method that pulls the city name as a pram
     once the city name is called(?) it getst the environment to the url
     then sets the environment based on api's headers for name and key value*/
  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> { /*adding observable means switching to a return from a get on line 18*/
    return this.http.get<WeatherData>(environment.weatherBaseUrl, {   /*<WeatherData> maps this method to the weather data model we created*/
      headers: new HttpHeaders()
      .set(environment.XRapidAPIAppHostHeaderName,
        environment.XRapidAPIAppHostHeaderValue)

      .set(environment.XRapidAPIKeyHeaderName,
        environment.XRapidAPIKeyHeaderValue),

        //params are parameters, right? Are they required? Run program without to see after it's working!
        params: new HttpParams()
        .set('city', cityName)
        .set('units', 'metric')
        .set('mode', 'json')
    })
  }
}

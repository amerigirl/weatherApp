import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  /* creates a connection to the httpClient via app.module
     creates a method that pulls the city name as a pram
     once the city name is called(?) it getst the environment to the url
     then sets the environment based on api's headers for name and key value*/
  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) {
    this.http.get(environment.weatherBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIAppHostHeaderName,
        environment.XRapidAPIAppHostHeaderValue)

      .set(environment.XRapidAPIKeyHeaderName,
        environment.XRapidAPIKeyHeaderValue)
    })
  }
}

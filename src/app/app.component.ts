import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//OnInit needed to be implemented (not sure why) and a constructor created to pull in weather service
export class AppComponent implements OnInit {

constructor(private WeatherService: WeatherService) {  //injects service inside the constructor to be used in OnInit

}

  ngOnInit(): void {
  //makes a get call to get the service

  this.WeatherService.getWeatherData('landon')  //only because I can't figure out how to get KC from the API yet
  .subscribe({
    next: (response) => {
      console.log(response);
      
    }
  })
  }

}

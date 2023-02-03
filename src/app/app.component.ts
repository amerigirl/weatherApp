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
  //makes a get call to get the weathr data

  this.WeatherService.getWeatherData('Kansas City')
  .subscribe({  //not sure why we have to subscribe to the method
    next: (response) => {  //I don't really know what's happening in this method--line by line
      console.log(response);

    }
  })
  }

}

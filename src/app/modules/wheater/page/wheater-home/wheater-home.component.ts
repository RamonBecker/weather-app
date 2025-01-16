import { Component, OnInit } from '@angular/core';
import { WheaterService } from '../../services/wheater.service';
import { IWheaterDatas } from 'src/app/models/interfaces/IWheaterDatas';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: [],
})
export class WheaterHomeComponent implements OnInit {
  private initialCity = 'Salvador';
  wheaterDatas!: IWheaterDatas;

  constructor(private weatherService: WheaterService) {}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCity);
  }

  getWeatherDatas(city: string): void {
    this.weatherService.getWeatherDatas(city).subscribe({
      next: (response) => {
        response && (this.wheaterDatas = response);
        console.log(this.wheaterDatas);
      },

      error: (e) => console.log(e),
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import {
  faDroplet,
  faTemperatureHigh,
  faTemperatureLow,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { IWheaterDatas } from 'src/app/models/interfaces/IWheaterDatas';

@Component({
  selector: 'app-wheater-card',
  templateUrl: './wheater-card.component.html',
  styleUrls: [],
})
export class WheaterCardComponent {
  @Input() weatherDatas!: IWheaterDatas;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;


}

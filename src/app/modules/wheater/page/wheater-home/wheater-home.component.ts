import { Component, OnDestroy, OnInit } from '@angular/core';
import { WheaterService } from '../../services/wheater.service';
import { IWheaterDatas } from 'src/app/models/interfaces/IWheaterDatas';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: [],
})
export class WheaterHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();

  initialCity = 'Salvador';
  wheaterDatas!: IWheaterDatas;
  searchIcon = faMagnifyingGlass

  constructor(private weatherService: WheaterService) {}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCity);
  }

  getWeatherDatas(city: string): void {
    this.weatherService
      .getWeatherDatas(city)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          response && (this.wheaterDatas = response);
          console.log(this.wheaterDatas);
        },

        error: (e) => console.log(e),
      });
  }

  onSubmit(): void {
    this.getWeatherDatas(this.initialCity);
    this.initialCity = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

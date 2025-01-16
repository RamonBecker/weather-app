import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Injeta essa classe em um componente
@Injectable({
  providedIn: 'root',
})
export class WheaterService {
  private apiKey = '6ee06edd8944451b862b7282d391f70d';

  constructor(private http: HttpClient) {}


  // https://api.openweathermap.org/data/2.5/weather?q=Salvador,br&APPID=6ee06edd8944451b862b7282d391f70d
  getWeatherDatas(cityName: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName},br&APPID=${this.apiKey}`,
      {}
    );
  }

}

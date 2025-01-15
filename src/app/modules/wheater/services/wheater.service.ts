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


  getWeatherDatas(city: string): Observable<any>{

    return this.http.get(`api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=json&appid=${this.apiKey}`, {});
  }

}

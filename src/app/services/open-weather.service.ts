import {inject, Injectable} from '@angular/core';
import {WeatherResponse} from '../models/wheater-response.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  private apiKey = '2404bcd477c873621f66300650daaff2';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private http = inject(HttpClient);

  constructor() {
  }

  buscarInfoClimaCidade(cidade: string): Observable<WeatherResponse> {
    const urlCompleta =
      this.apiUrl + '?q=' + encodeURIComponent(cidade) + '&appid='
      + this.apiKey + '&lang=pt_br&units=metric';

    return this.http.get<WeatherResponse>(urlCompleta);
  }
}

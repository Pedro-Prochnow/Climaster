import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../../models/wheater-response.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  private apiKey  ='9be4d4d4f2a015e7d65048505953e1fb';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private http = inject(HttpClient);

constructor() { 
}
  buscarInfoClimaCidadeAtual (): Observable<WeatherResponse> {

    const urlCompleta = 
      this.apiUrl + '?q=Dois%20Vizinhos&appid=' + this.apiKey + '&lang=pt_br&units=metric';

    return this.http.get<WeatherResponse>(urlCompleta);
  }
}

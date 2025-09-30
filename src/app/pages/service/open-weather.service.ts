import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  apiKey  ='9be4d4d4f2a015e7d65048505953e1fb';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

constructor() { 

  
}
  buscarInfoClimaCidadeAtual () {

    const urlCompleta = 
      this.apiUrl + '?q=Dois%20Vizinhos&appid=' + this.apiKey + '&lang=pt_br&units=metrics';
  }
}

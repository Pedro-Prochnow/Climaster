import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { OpenWeatherService } from '../../service/open-weather.service';
import { WeatherResponse } from '../../models/wheater-response.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { DecimalPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-clima',
  standalone: true,
  imports: [DecimalPipe, TitleCasePipe],
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent {

  navegador = inject(Router);
  openWeather = inject(OpenWeatherService);

  dadosClima = toSignal<WeatherResponse | null>(
    this.openWeather.buscarInfoClimaCidadeAtual()
    .pipe(
      catchError(err => {
        console.error('Erro ao buscar dados do clima', err);
        return of(null);
      })
    ),
    {initialValue: null}
  );

  constructor() { }

  navegarParaTelaDePesquisa() {
    this.navegador.navigate(['/pesquisa']);
  }
}

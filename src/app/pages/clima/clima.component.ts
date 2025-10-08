import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { OpenWeatherService } from '../../services/open-weather.service';
import { WeatherResponse } from '../../models/wheater-response.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { DecimalPipe, TitleCasePipe } from '@angular/common';
import { NomeCidadeComponent } from "../../components/nome-cidade/nome-cidade.component";
import { TempCidadeComponent } from "../../components/temp-cidade/temp-cidade.component";
import { AppLoadingComponent } from "../../components/app-loading/app-loading.component";
import { ImgTituloComponent } from "../../components/img-titulo/img-titulo.component";
import { TempMinMaxComponent } from "../../components/temp-minmax/temp-minmax.component";
import { AppBotaoComponent } from "../../components/app-botao/app-botao.component";

@Component({
  selector: 'app-clima',
  standalone: true,
  imports: [DecimalPipe, NomeCidadeComponent, TempCidadeComponent, AppLoadingComponent, ImgTituloComponent, TempMinMaxComponent, AppBotaoComponent],
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
  mensagemCarregando: string = 'Carregando temperatura'

  constructor() { }

  navegarParaTelaDePesquisa() {
    this.navegador.navigate(['/pesquisa']);
  }
}

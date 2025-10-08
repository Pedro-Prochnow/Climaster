import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { OpenWeatherService } from '../../services/open-weather.service';
import { WeatherResponse } from '../../models/wheater-response.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { AppBotaoComponent } from "../../components/app-botao/app-botao.component";
import { AppClimaContainerComponent } from "../../components/clima-container/clima-container.component";

@Component({
  selector: 'app-clima',
  standalone: true,
  imports: [AppBotaoComponent, AppClimaContainerComponent],
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent {

  navegador = inject(Router);

  constructor() { }

  navegarParaTelaDePesquisa() {
    this.navegador.navigate(['/pesquisa']);
  }
}

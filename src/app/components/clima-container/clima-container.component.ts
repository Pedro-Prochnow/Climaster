import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { NomeCidadeComponent } from "../nome-cidade/nome-cidade.component";
import { TempCidadeComponent } from "../temp-cidade/temp-cidade.component";
import { ImgTituloComponent } from "../img-titulo/img-titulo.component";
import { TempMinMaxComponent } from "../temp-minmax/temp-minmax.component";
import { AppLoadingComponent } from "../app-loading/app-loading.component";
import { WeatherResponse } from '../../models/wheater-response.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-clima-container',
  standalone: true,
  imports: [DecimalPipe, NomeCidadeComponent, TempCidadeComponent, ImgTituloComponent, TempMinMaxComponent, AppLoadingComponent],
  templateUrl: './clima-container.component.html',
  styleUrls: ['./clima-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppClimaContainerComponent {

  mensagemCarregando: string = 'Carregando temperatura'
  dadosClima = input<WeatherResponse | null>(null);
}

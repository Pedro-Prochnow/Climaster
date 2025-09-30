import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { OpenWeatherService } from "../service/open-weather.service";

@Component({
    selector: 'app-clima',
    imports: [],
    templateUrl: './clima.component.html',
    styleUrl: './clima.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClimaComponent implements OnInit {

    roteador = inject(Router);

    openWeather = inject(OpenWeatherService);

    ngOnInit() { 
        this.openWeather.buscarInfoClimaCidadeAtual();
    }

    buscarClima() {
        this.roteador.navigate(['/pesquisa']);
    }
}

import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AppBotaoComponent } from "../../components/app-botao/app-botao.component";
import { AppClimaContainerComponent } from "../../components/clima-container/clima-container.component";

@Component({
  selector: 'app-clima',
  standalone: true,
  imports: [AppBotaoComponent, AppClimaContainerComponent],
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss']
})
export class ClimaComponent {

  navegador = inject(Router);

  constructor() { }

  navegarParaTelaDePesquisa() {
    this.navegador.navigate(['/pesquisa']);
  }
}

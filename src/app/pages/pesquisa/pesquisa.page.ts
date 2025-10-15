import { Component, OnInit, signal } from '@angular/core';
import { AppClimaContainerComponent } from "../../components/clima-container/clima-container.component";

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.page.html',
  styleUrls: ['./pesquisa.page.scss'],
  imports: [AppClimaContainerComponent]
})
export class PesquisaComponent {

  cidadePesquisada = signal ('Dois Vizinhos');

  pesquisar(nomeCidade: string) {
    if (nomeCidade.trim()) {
      this.cidadePesquisada.set(nomeCidade.trim());
    }
  }
}

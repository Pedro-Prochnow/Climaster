import { Component, OnInit } from '@angular/core';
import { AppClimaContainerComponent } from "../../components/clima-container/clima-container.component";

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss'],
  imports: [AppClimaContainerComponent]
})
export class PesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

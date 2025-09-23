import {ChangeDetectionStrategy, Component, inject, OnInit} from "@angular/core";
import {Router} from '@angular/router';

@Component({
  selector: 'app-clima',
  imports: [],
  templateUrl: './clima.component.html',
  styleUrl: './clima.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClimaComponent implements OnInit {

  roteador = inject(Router);

  ngOnInit(): void {
  }
}

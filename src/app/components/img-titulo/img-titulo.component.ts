import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Weather } from '../../models/wheater-response.model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-img-titulo',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './img-titulo.component.html',
  styleUrls: ['./img-titulo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgTituloComponent {

  clima = input<Weather | null>(null);
}

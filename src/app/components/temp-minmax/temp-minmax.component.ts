import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Main, Weather } from '../../models/wheater-response.model';
import { DecimalPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-temp-minmax',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './temp-minmax.component.html',
  styleUrls: ['./temp-minmax.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TempMinMaxComponent {

  main = input<Main | null>(null);
}

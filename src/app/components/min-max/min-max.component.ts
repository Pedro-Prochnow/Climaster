import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Main } from '../../models/wheater-response.module';

@Component({
  selector: 'app-min-max',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './min-max.component.html',
  styleUrls: ['./min-max.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinMaxComponent {

  main = input<Main | undefined>();
 }

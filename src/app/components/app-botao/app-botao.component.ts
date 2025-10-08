import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [],
  templateUrl: './app-botao.component.html',
  styleUrls: ['./app-botao.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBotaoComponent {

  onClick = output<void>();
}

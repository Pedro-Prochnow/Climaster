import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'clima-container',
  standalone: true,
  imports: [],
  templateUrl: './clima-container.component.html',
  styleUrls: ['./clima-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClimaContainerComponent {

  mensagem = input<string>('Carregando...');
 }

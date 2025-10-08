import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-loading-cidade',
  standalone: true,
  imports: [],
  templateUrl: './app-loading.component.html',
  styleUrls: ['./app-loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLoadingComponent {

  mensagem = input<string>('Carregando...');
 }

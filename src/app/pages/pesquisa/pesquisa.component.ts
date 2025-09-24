import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-pesquisa',
    imports: [],
    templateUrl: './pesquisa.component.html',
    styleUrl: './pesquisa.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PesquisaComponent implements OnInit {

    roteador = inject(Router);

    ngOnInit(): void {
    }
}

import { Routes } from "@angular/router";

export const PesquisaRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pesquisa.component')
        .then(r => r.PesquisaComponent)
  }
];
import { Routes } from "@angular/router";

export const pesquisaRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pesquisa.page').then(r => r.PesquisaComponent)
  }
];

import { Routes } from "@angular/router";

export const climaRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./clima.page').then(r => r.ClimaComponent)
  }
];

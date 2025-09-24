import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./clima.component')
        .then(r => r.ClimaComponent)
  }
];
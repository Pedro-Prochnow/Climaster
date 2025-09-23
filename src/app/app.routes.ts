import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'clima',
    pathMatch: 'full'
  },
  {
    path: 'clima',
    loadChildren: () => import('./pages/clima/clima.routes').then(rota => rota.routes)
  },
];

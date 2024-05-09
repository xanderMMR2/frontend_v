import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/accion/accion.routes').then(m => m.ACCION_ROUTES)
    }
];

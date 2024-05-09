import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NextComponent } from './next/next.component';

export const ACCION_ROUTES: Routes =[
    {path: 'home', component: HomeComponent},
    {path: 'next', component: NextComponent}
]
﻿import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';

const appRoutes: Routes = [
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
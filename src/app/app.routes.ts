import { Routes } from '@angular/router';
import { authGuard, contactGuard } from './guards/common-guard';

export const routes: Routes = [
    // {
    //     path: 'home',
    //     component: Home
    // },
    // {
    //     path: 'about',
    //     component: About
    // }

    {
        path: 'home',
        // loadComponent: () => import('./home/home').then(m => m.Home),
        loadChildren: () => import('./home/home.routes').then(m=>m.routes)
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about').then(m => m.About)
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact').then(m => m.Contact),
        canActivate: [authGuard, contactGuard]
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login').then(m => m.Login),
    },
    {
        path: 'denied',
        loadComponent: () => import('./denied/denied').then(m=>m.Denied)
    },
    {
        path: 'state',
        loadComponent: () => import('./state-management/state-management').then(m=>m.StateManagement)
    }
    
];

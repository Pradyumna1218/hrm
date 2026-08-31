import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';

export const routes: Routes = [
    {
        path: 'home',
        
        loadComponent:() => import('./home/home').then(m => m.Home),
        loadChildren: () => import('./home/dashboard/home.app.routes').then(m => m.routes)
    },
    {
        path: 'about',
        // component: About this is not lazy loading
        loadComponent:() => import('./about/about').then(m => m.About)
    }
];

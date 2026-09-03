import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';

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
        component: Contact
    },
    {
        path: 'login',
        component: Login
    }
];

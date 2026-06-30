import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
  },
  {
    path: 'section/:id',
    loadComponent: () => import('./pages/section/section').then(m => m.SectionComponent),
  },
  {
    path: 'mistakes',
    loadComponent: () => import('./pages/mistakes/mistakes').then(m => m.MistakesComponent),
  },
  {
    path: 'not-found',
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFoundComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFoundComponent),
  },
];

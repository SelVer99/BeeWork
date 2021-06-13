import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'aggiungi-progetto',
    loadChildren: () => import('./pages/aggiungi-progetto/aggiungi-progetto.module').then(m => m.AggiungiProgettoPageModule)
  },
  {
    path: 'impostazioni',
    loadChildren: () => import('./pages/impostazioni/impostazioni.module').then(m => m.ImpostazioniPageModule)
  },
  {
    path: 'progetto',
    loadChildren: () => import('./pages/progetto/progetto.module').then( m => m.ProgettoPageModule)
  },
  {
    path: 'lista-task',
    loadChildren: () => import('./pages/lista-task/lista-task.module').then(m => m.ListaTaskPageModule)
  },
  {
    path: 'profilo-membro',
    loadChildren: () => import('./pages/profilo-membro/profilo-membro.module').then(m => m.ProfiloMembroPageModule)
  },
  {
    path: 'progetti-task-personali',
    // eslint-disable-next-line max-len
    loadChildren: () => import('./pages/progetti-task-personali/progetti-task-personali.module').then( m => m.ProgettiTaskPersonaliPageModule)
  },
  {
    path: 'profilo-personale',
    loadChildren: () => import('./pages/profilo-personale/profilo-personale.module').then( m => m.ProfiloPersonalePageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'aggiungi-task',
    loadChildren: () => import('./pages/aggiungi-task/aggiungi-task.module').then( m => m.AggiungiTaskPageModule)
  },
  {
    path: 'dettagli-task',
    loadChildren: () => import('./pages/dettagli-task/dettagli-task.module').then(m => m.DettagliTaskPageModule)
  },
  {
    path: 'lista-notifiche',
    loadChildren: () => import('./pages/lista-notifiche/lista-notifiche.module').then( m => m.ListaNotifichePageModule)
  },
  {
    path: 'registrazione',
    loadChildren: () => import('./pages/registrazione/registrazione.module').then( m => m.RegistrazionePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

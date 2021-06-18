import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'progetti',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/progetti/progetti.module').then(m => m.ProgettiPageModule)
  },
  {
    path: '',
    redirectTo: 'progetti',
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
    path: 'profilo-membro/:id',
    loadChildren: () => import('./pages/profilo-membro/profilo-membro.module').then(m => m.ProfiloMembroPageModule)
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
    path: 'lista-notifiche',
    loadChildren: () => import('./pages/lista-notifiche/lista-notifiche.module').then( m => m.ListaNotifichePageModule)
  },
  {
    path: 'registrazione',
    loadChildren: () => import('./pages/registrazione/registrazione.module').then( m => m.RegistrazionePageModule)
  },
  { 
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

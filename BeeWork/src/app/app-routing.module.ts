import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
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
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

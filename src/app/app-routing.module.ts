import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'competitions',
    loadChildren: () => import('./competitions/competitions.module').then((m) => m.CompetitionsPageModule),
  },
  {
    path: 'teams',
    loadChildren: () => import('./teams/teams.module').then((m) => m.TeamsPageModule),
  },
  {
    path: 'team-information',
    loadChildren: () => import('./team-information/team-information.module').then( m => m.TeamInformationPageModule)
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

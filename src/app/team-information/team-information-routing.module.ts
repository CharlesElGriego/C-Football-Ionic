import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamInformationPage } from './team-information.page';

const routes: Routes = [
  {
    path: ':id',
    component: TeamInformationPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamInformationPageRoutingModule {}

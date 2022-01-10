import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamInformationPageRoutingModule } from './team-information-routing.module';

import { TeamInformationPage } from './team-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamInformationPageRoutingModule
  ],
  declarations: [TeamInformationPage]
})
export class TeamInformationPageModule {}

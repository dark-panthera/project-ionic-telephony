import { HomeHeaderComponent } from '../../components/home-header/home-header.component';
import { JobTileComponent } from '../../components/job-tile/job-tile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, JobTileComponent, HomeHeaderComponent]
})
export class HomePageModule {}

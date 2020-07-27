import { HomeHeaderComponent } from '../../components/home-header/home-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { DetailTileComponent } from 'src/app/components/detail-tile/detail-tile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule
  ],
  declarations: [DetailPage, DetailTileComponent, HomeHeaderComponent]
})
export class DetailPageModule {}

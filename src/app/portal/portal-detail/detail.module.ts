import { HomeHeaderComponent } from '../../components/home-header/home-header.component';
import { OfferTileComponent } from '../../components/offer-tile/offer-tile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule
  ],
  declarations: [DetailPage, OfferTileComponent, HomeHeaderComponent]
})
export class DetailPageModule {}

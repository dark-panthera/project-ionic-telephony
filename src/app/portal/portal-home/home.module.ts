import { HomeHeaderComponent } from '../../components/home-header/home-header.component';
import { OfferTileComponent } from '../../components/offer-tile/offer-tile.component';
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
  declarations: [HomePage, OfferTileComponent, HomeHeaderComponent]
})
export class HomePageModule {}

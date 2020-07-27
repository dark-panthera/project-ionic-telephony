
import { Component, OnInit, Input } from '@angular/core';
import { Offer } from 'src/app/portal/offer.model';

@Component({
  selector: 'app-offer-tile',
  templateUrl: './offer-tile.component.html',
  styleUrls: ['./offer-tile.component.scss'],
})
export class OfferTileComponent implements OnInit {
  @Input() offer: Offer;
  @Input() redirection: string;
  
  constructor() {}

  ngOnInit() {}

}

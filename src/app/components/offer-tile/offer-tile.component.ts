
import { Component, OnInit, Input } from '@angular/core';
import { Offer } from 'src/app/portal/offer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-tile',
  templateUrl: './offer-tile.component.html',
  styleUrls: ['./offer-tile.component.scss'],
})
export class OfferTileComponent implements OnInit {
  @Input() offer: Offer;
  @Input() redirection: string;
  
  constructor(private router: Router) {}

  ngOnInit() {}

  onRedirect() {
    console.log('click');
      this.router.navigate(['home', 100]);
  }
}

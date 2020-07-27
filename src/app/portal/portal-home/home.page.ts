import { Subscriptions } from './../subscriptions.model';
import { Offer } from './../offer.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortalService } from '../portal.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  protected loading$: Observable<boolean>;
  protected offers: Offer[];

  private subOffer: Subscription;

  constructor(private portalService: PortalService) { }

  ngOnInit() {
    this.loading$ = this.portalService.loading;
    this.subOffer = this.portalService.getAllOffers().subscribe((offers: Offer[]) => {
      this.offers = offers;
      console.log(offers);
    });

  }

  ngOnDestroy() {
    this.subOffer.unsubscribe();
  }

}

import { SubscriptionModel } from './../subscriptions.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortalService } from '../portal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit, OnDestroy {
  protected subscriptions: SubscriptionModel[];

  private subSubscription: Subscription;

  constructor(private portalService: PortalService) { }

  ngOnInit() {
    this.subSubscription = this.portalService.getAllSubscriptions().subscribe((subscriptions: SubscriptionModel[]) => {
      this.subscriptions = subscriptions;
    });

  }

  ngOnDestroy() {
    this.subSubscription.unsubscribe();
  }
}

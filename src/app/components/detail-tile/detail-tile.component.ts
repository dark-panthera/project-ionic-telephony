import { SubscriptionModel } from './../../portal/subscriptions.model';

import { Component, OnInit, Input } from '@angular/core';
import { Offer } from 'src/app/portal/offer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'detail-tile',
  templateUrl: './detail-tile.component.html',
  styleUrls: ['./detail-tile.component.scss'],
})
export class DetailTileComponent implements OnInit {
  @Input() subscription: SubscriptionModel;
  @Input() redirection: string;
  
  constructor(private router: Router) {}

  ngOnInit() {}

}

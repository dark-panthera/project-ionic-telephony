import { Offers, Offer } from './offer.model';
import { Subscriptions, SubscriptionModel } from './subscriptions.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  constructor(private http: HttpClient) { }

  getAllSubscriptions(): Observable<SubscriptionModel[]> {
    return this.http.get(
      `https://selfcare-service.demo.melita.com/interview/api/offers/100/subscriptions`
    )
      .pipe(
        map((subscriptions: Subscriptions) => {
          const sub = [];

          subscriptions.subscriptions.forEach((value) => {
            sub.push(value);
          });

          return sub;
        })
      );
  }

  getAllOffers(): Observable<Offer[]> {
    return this.http.get(
      `https://selfcare-service.demo.melita.com/interview/api/offers`
    )
      .pipe(
        map((offers: Offers) => {
          const sub = [];

          offers.offers.forEach((value) => {
            sub.push(value);
          });

          return sub;
        })
      );
  }

}

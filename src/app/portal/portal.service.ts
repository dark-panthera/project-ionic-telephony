import { Offers, Offer } from './offer.model';
import { Subscriptions, SubscriptionModel } from './subscriptions.model';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  public loading = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getAllSubscriptions(): Observable<SubscriptionModel[]> {
    this.loading.next(true);

    return this.http.get(
      `https://selfcare-service.demo.melita.com/interview/api/offers/100/subscriptions`
    )
      .pipe(
        map((subscriptions: Subscriptions) => {
          const sub = [];

          subscriptions.subscriptions.forEach((value) => {
            sub.push(value);
          });
          
          this.loading.next(false);
          return sub;
        })
      );
  }

  getAllOffers(): Observable<Offer[]> {
    this.loading.next(true);

    return this.http.get(
      `https://selfcare-service.demo.melita.com/interview/api/offers`
    )
      .pipe(
        map((offers: Offers) => {
          const sub = [];

          offers.offers.forEach((value) => {
            sub.push(value);
          });
          this.loading.next(false);

          return sub;
        })
      );
  }

}

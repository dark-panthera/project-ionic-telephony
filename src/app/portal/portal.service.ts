import { Offers } from './offer.model';
import { Subscriptions } from './subscriptions.model';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  private subscriptionsBeh = new BehaviorSubject<Subscriptions[]>([]);
  private offersBeh = new BehaviorSubject<Offers[]>([]);

  constructor(private http: HttpClient) { }

  getAllSubscriptions(): Observable<Subscriptions[]> {
    return this.http.get<Subscriptions[]>(
      `https://selfcare-service.demo.melita.com/interview/api/offers/100/subscriptions`
      )
      .pipe(
        tap((subscriptions: Subscriptions[]) =>
          this.subscriptionsBeh.next(subscriptions)
        )
      );
  }

  getAllOffers(): Observable<Offers[]> {
    return this.http.get<Offers[]>(
      `https://selfcare-service.demo.melita.com/interview/api/offers`
      )
      .pipe(
        tap((offers: Offers[]) =>
          this.offersBeh.next(offers)
        )
      );
  }

}

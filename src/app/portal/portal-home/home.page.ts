import { Component, OnInit } from '@angular/core';
import { PortalService } from '../portal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  protected offers$: Observable<any>;

  constructor(private portalService: PortalService) { }

  ngOnInit() {
    this.offers$ = this.portalService.getAllOffers();
  }

}

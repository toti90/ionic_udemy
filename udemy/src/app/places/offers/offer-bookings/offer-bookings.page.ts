import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPlace } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  offerId: string;
  place: IPlace;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placeService: PlacesService
  ) {}

  ngOnInit() {
    this.offerId = this.activatedRoute.snapshot.params.offerId;
    this.place = this.placeService.getOnePlace(this.offerId);
  }
}

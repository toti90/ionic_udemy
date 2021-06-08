import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  offerId: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.offerId = this.activatedRoute.snapshot.params.offerId;
  }
}

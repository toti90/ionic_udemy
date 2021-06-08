import { Component, OnInit } from '@angular/core';
import { IPlace } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  places: IPlace[];

  constructor(private placesService: PlacesService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.places = this.placesService.places;
  }
}

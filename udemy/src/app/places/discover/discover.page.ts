import { Component, OnInit } from '@angular/core';
import { IPlace } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  places: IPlace[];

  // sliderOptions = {
  //   slidesPerView: 1.7,
  //   spaceBetween: 6,
  //   loop: true,
  // };

  constructor(private placesService: PlacesService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.places = this.placesService.places;
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Geolocation} from 'ionic-native';

import {
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapsLatLng,
 CameraPosition,
 GoogleMapsMarkerOptions,
 GoogleMapsMarker
} from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lat: any;
  lng: any;
  constructor(public navCtrl: NavController) {
  }
  loadMap() {
    let element: HTMLElement = document.getElementById('map');
    let map = new GoogleMap(element);
    map.one(GoogleMapsEvent.MAP_READY).then(() => {
      let me: GoogleMapsLatLng = new GoogleMapsLatLng(this.lat, this.lng);
      let position: CameraPosition = {
        target: me,
        zoom: 18,
        tilt: 30
      };
      map.moveCamera(position);
      let markerOptions: GoogleMapsMarkerOptions = {
        position: me,
        title: 'me!'
      };
      map.addMarker(markerOptions)
      .then((marker: GoogleMapsMarker) => {
        marker.showInfoWindow();
      });
    });
  }
  ngAfterViewInit() {
    Geolocation.getCurrentPosition().then(pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
      this.loadMap();
    });
  }
}

import { Directive } from '@angular/core';
import {GoogleMapsAPIWrapper} from 'angular2-google-maps/core';
declare var google, window;

@Directive({
  selector: '[appMyMap]'
})
export class MyMapDirective {

  constructor(private gmapsApi: GoogleMapsAPIWrapper) {
    navigator.geolocation.getCurrentPosition((position)=>{
      this.gmapsApi.getNativeMap().then(map => {
        let marker: Array<any> = [];
        let infowindow: Array<any> = [];
        let content: string;
        let image:any = {
          scaledSize: new google.maps.Size(40, 40),
          origin: new google.maps.Point(0,0),
          anchor: new google.maps.Point(0, 0)
        };
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(pos);
        map.setZoom(12);
        new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Io!'
        });
        let service = new google.maps.places.PlacesService(map);
        let request = {
          location: map.getCenter(),
          radius: '50000',
          query: 'La Feltrinelli',
          type: 'book_store'
        }
        service.textSearch(request, data=>{
          data.forEach((p, key) =>{
            service.getDetails({placeId: p.place_id}, function(place, status) {
              image.url = p.icon;
              if(place){
                content = `<div>${p.name} in ${place.adr_address}</div><div>tel: ${place.formatted_phone_number}</div>`;
              }else{
                content = `<div>${p.name} in ${p.formatted_address}</div>`;
              }
              infowindow[key] = new google.maps.InfoWindow({
                content: content
              });
              marker[key] = new google.maps.Marker({
                position: p.geometry.location,
                map: map,
                title: p.name,
                icon: image
              });
              marker[key].addListener('click', function() {
                infowindow[key].open(map, marker[key]);
              });
            });
          });
          var aux = document.createElement('div');
          aux.id = 'idprova';
          var t = document.createTextNode("bye");
          aux.appendChild(t);
          document.querySelector('.container').appendChild(aux);
          window.test = document.querySelector('#idprova');
          window.test.addEventListener("click", function(){
            alert('ciao');
          })
          window.test.parentNode.removeChild(window.test);
        });
      });
    });
  }
}

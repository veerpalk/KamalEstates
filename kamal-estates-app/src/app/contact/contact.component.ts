import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 // @ViewChild('gmap') gmapElement: any;
 // map: google.maps.Map;
 constructor() { }

  public map: any = { lat: 30.734909, lng: 76.755852 };
  markers = [
    { lat: 30.734909, lng: 76.755852 }
    ];
      

  ngOnInit() {

    // var mapProp = {
    //   center: new google.maps.LatLng(18.5793, 73.8143),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);


  }

}

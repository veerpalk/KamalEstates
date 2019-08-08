import { Component, OnInit } from '@angular/core';
import { Property } from '../models/Property';

@Component({
  selector: 'app-top-ten-properties',
  templateUrl: './top-ten-properties.component.html',
  styleUrls: ['./top-ten-properties.component.css']
})
export class TopTenPropertiesComponent implements OnInit {

  properties:Property[]= [];

  

  constructor() {

    let property1 = new Property({propertyNumber:13653,propertyLocation:'MOHALI',PropertyType:'RESIDENTIAL',PropertyArea:'200.00 SQUARE YARDS',PropertyCost:'55.00 lacs'});
    let property2 = new Property({propertyNumber:13653,propertyLocation:'MOHALI',PropertyType:'RESIDENTIAL',PropertyArea:'200.00 SQUARE YARDS',PropertyCost:'55.00 lacs'});
    let property3 = new Property({propertyNumber:13653,propertyLocation:'MOHALI',PropertyType:'RESIDENTIAL',PropertyArea:'200.00 SQUARE YARDS',PropertyCost:'55.00 lacs'});
    let property4 = new Property({propertyNumber:13653,propertyLocation:'MOHALI',PropertyType:'RESIDENTIAL',PropertyArea:'200.00 SQUARE YARDS',PropertyCost:'55.00 lacs'});
 
    this.properties.push(property1);
    this.properties.push(property2);
    this.properties.push(property3);
    this.properties.push(property4);

   }

  ngOnInit() {
  }


}

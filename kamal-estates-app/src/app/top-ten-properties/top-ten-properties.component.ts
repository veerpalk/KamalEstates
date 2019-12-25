import { Component, OnInit } from '@angular/core';
import { Property } from '../models/Property';
//import { SliderType } from "igniteui-angular";

@Component({
  selector: 'app-top-ten-properties',
  templateUrl: './top-ten-properties.component.html',
  styleUrls: ['./top-ten-properties.component.css']
})
export class TopTenPropertiesComponent implements OnInit {
  //public sliderType = SliderType;
  properties:Property[]= [];
  propertySearchLocations=[];
  

  constructor() {

    let property1 = new Property({propertyNumber:13653,propertyLocation:'MOHALI',PropertyType:'RESIDENTIAL',PropertyArea:'200.00 SQUARE YARDS',PropertyCost:'55.00 lacs',img:'../../assets/img/portfolio/sectorPlan1.jpg'});
    let property2 = new Property({propertyNumber:13653,propertyLocation:'MOHALI',PropertyType:'RESIDENTIAL',PropertyArea:'200.00 SQUARE YARDS',PropertyCost:'55.00 lacs',img:'../../assets/img/portfolio/sectorPlan2.jpg'});
    let property3 = new Property({propertyNumber:13653,propertyLocation:'MOHALI',PropertyType:'RESIDENTIAL',PropertyArea:'200.00 SQUARE YARDS',PropertyCost:'55.00 lacs',img:'../../assets/img/portfolio/sectorPlan3.jpg'});
    let property4 = new Property({propertyNumber:13653,propertyLocation:'MOHALI',PropertyType:'RESIDENTIAL',PropertyArea:'200.00 SQUARE YARDS',PropertyCost:'55.00 lacs',img:'../../assets/img/portfolio/sectorPlan4.jpg'});
    let property5 = new Property({propertyNumber:13653,propertyLocation:'MOHALI',PropertyType:'RESIDENTIAL',PropertyArea:'200.00 SQUARE YARDS',PropertyCost:'55.00 lacs',img:'../../assets/img/portfolio/sectorPlan5.jpg'});
    let property6 = new Property({propertyNumber:13653,propertyLocation:'MOHALI',PropertyType:'RESIDENTIAL',PropertyArea:'200.00 SQUARE YARDS',PropertyCost:'55.00 lacs',img:'../../assets/img/portfolio/sectorPlan6.jpg'});
    let property7 = new Property({propertyNumber:13653,propertyLocation:'MOHALI',PropertyType:'RESIDENTIAL',PropertyArea:'200.00 SQUARE YARDS',PropertyCost:'55.00 lacs',img:'../../assets/img/portfolio/sectorPlan7.jpg'});
    let property8 = new Property({propertyNumber:13653,propertyLocation:'MOHALI',PropertyType:'RESIDENTIAL',PropertyArea:'200.00 SQUARE YARDS',PropertyCost:'55.00 lacs',img:'../../assets/img/portfolio/sectorPlan8.jpg'});
    let property9 = new Property({propertyNumber:13653,propertyLocation:'MOHALI',PropertyType:'RESIDENTIAL',PropertyArea:'200.00 SQUARE YARDS',PropertyCost:'55.00 lacs',img:'../../assets/img/portfolio/sectorPlan9.jpg'});
    let property10 = new Property({propertyNumber:13653,propertyLocation:'MOHALI',PropertyType:'RESIDENTIAL',PropertyArea:'200.00 SQUARE YARDS',PropertyCost:'55.00 lacs',img:'../../assets/img/portfolio/sectorPlan10.jpg'});
 
    this.properties.push(property1);
    this.properties.push(property2);
    this.properties.push(property3);
    this.properties.push(property4);
    this.properties.push(property4);
    this.properties.push(property5);
    this.properties.push(property6);
    this.properties.push(property7);
    this.properties.push(property8);
    this.properties.push(property9);
    this.properties.push(property10);
    this.propertySearchLocations=['All','Chandigarh','Mohali','Panchkula','kharar','zirakpur','derabassi','landran'];
   }

  ngOnInit() {
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  public propertyType:[
    {"Buy Property","Sell Property","Rent In Property","Rent Out Property","Lease Property" }
  ]
  constructor() { }


  ngOnInit() {
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingPropertyComponent } from './renting-property.component';

describe('RentingPropertyComponent', () => {
  let component: RentingPropertyComponent;
  let fixture: ComponentFixture<RentingPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentingPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentingPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

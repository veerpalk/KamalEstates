import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenPropertiesComponent } from './top-ten-properties.component';

describe('TopTenPropertiesComponent', () => {
  let component: TopTenPropertiesComponent;
  let fixture: ComponentFixture<TopTenPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

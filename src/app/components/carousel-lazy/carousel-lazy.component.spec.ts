import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselLazyComponent } from './carousel-lazy.component';

describe('CarouselLazyComponent', () => {
  let component: CarouselLazyComponent;
  let fixture: ComponentFixture<CarouselLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerspectiveOrderComponent } from './perspective-order.component';

describe('PerspectiveOrderComponent', () => {
  let component: PerspectiveOrderComponent;
  let fixture: ComponentFixture<PerspectiveOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerspectiveOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerspectiveOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

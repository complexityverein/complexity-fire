import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoroInputComponent } from './loro-input.component';

describe('LoroInputComponent', () => {
  let component: LoroInputComponent;
  let fixture: ComponentFixture<LoroInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoroInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoroInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

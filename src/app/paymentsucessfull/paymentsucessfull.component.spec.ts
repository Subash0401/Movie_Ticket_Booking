import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsucessfullComponent } from './paymentsucessfull.component';

describe('PaymentsucessfullComponent', () => {
  let component: PaymentsucessfullComponent;
  let fixture: ComponentFixture<PaymentsucessfullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsucessfullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsucessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

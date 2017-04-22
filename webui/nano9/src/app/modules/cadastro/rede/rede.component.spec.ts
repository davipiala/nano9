import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeComponent } from './rede.component';

describe('RedeComponent', () => {
  let component: RedeComponent;
  let fixture: ComponentFixture<RedeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

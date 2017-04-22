import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeWorkflow3Component } from './rede-workflow-3.component';

describe('RedeWorkflow3Component', () => {
  let component: RedeWorkflow3Component;
  let fixture: ComponentFixture<RedeWorkflow3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeWorkflow3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeWorkflow3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

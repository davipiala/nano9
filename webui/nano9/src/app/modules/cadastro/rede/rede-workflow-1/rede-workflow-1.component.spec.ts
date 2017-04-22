import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeWorkflow1Component } from './rede-workflow-1.component';

describe('RedeWorkflow1Component', () => {
  let component: RedeWorkflow1Component;
  let fixture: ComponentFixture<RedeWorkflow1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeWorkflow1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeWorkflow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

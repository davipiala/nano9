import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeWorkflow2Component } from './rede-workflow-2.component';

describe('RedeWorkflow2Component', () => {
  let component: RedeWorkflow2Component;
  let fixture: ComponentFixture<RedeWorkflow2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeWorkflow2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeWorkflow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

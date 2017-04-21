import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencoesComponent } from './manutencoes.component';

describe('ManutencoesComponent', () => {
  let component: ManutencoesComponent;
  let fixture: ComponentFixture<ManutencoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

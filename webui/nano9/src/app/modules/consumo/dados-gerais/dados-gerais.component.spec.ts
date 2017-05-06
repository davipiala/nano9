import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosGeraisComponent } from './dados-gerais.component';

describe('DadosGeraisComponent', () => {
  let component: DadosGeraisComponent;
  let fixture: ComponentFixture<DadosGeraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosGeraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosGeraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

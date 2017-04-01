import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificioComponent } from './edificio.component';

describe('EdificioComponent', () => {
  let component: EdificioComponent;
  let fixture: ComponentFixture<EdificioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdificioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdificioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

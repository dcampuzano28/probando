import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadCrearComponent } from './actividad-crear.component';

describe('ActividadCrearComponent', () => {
  let component: ActividadCrearComponent;
  let fixture: ComponentFixture<ActividadCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ServicioActividadService } from './servicio-actividad.service';

describe('ServicioActividadService', () => {
  let service: ServicioActividadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioActividadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

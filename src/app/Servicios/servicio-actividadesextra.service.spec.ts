import { TestBed } from '@angular/core/testing';

import { ServicioActividadesextraService } from './servicio-actividadesextra.service';

describe('ServicioActividadextraService', () => {
  let service: ServicioActividadesextraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioActividadesextraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

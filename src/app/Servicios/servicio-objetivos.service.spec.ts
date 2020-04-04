import { TestBed } from '@angular/core/testing';

import { ServicioObjetivosService } from './servicio-objetivos.service';

describe('ServicioObjetivosService', () => {
  let service: ServicioObjetivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioObjetivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

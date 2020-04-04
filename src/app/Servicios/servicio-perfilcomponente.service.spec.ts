import { TestBed } from '@angular/core/testing';

import { ServicioPerfilcomponenteService } from './servicio-perfilcomponente.service';

describe('ServicioPerfilcomponenteService', () => {
  let service: ServicioPerfilcomponenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPerfilcomponenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

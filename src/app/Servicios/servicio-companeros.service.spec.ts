import { TestBed } from '@angular/core/testing';
import { ServicioCompanerosService } from './servicio-companeros.service';

describe('ServicioCompanerosService', () => {
  let service: ServicioCompanerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCompanerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

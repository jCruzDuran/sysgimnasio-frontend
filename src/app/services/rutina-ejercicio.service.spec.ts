import { TestBed } from '@angular/core/testing';

import { RutinaEjercicioService } from './rutina-ejercicio.service';

describe('RutinaEjercicioService', () => {
  let service: RutinaEjercicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutinaEjercicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DescripcionejercicioService } from './descripcionejercicio.service';

describe('DescripcionejercicioService', () => {
  let service: DescripcionejercicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescripcionejercicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { Alumnos } from './alumnos';

describe('Alumnos', () => {
  let service: Alumnos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Alumnos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualizar } from './actualizar';

describe('Actualizar', () => {
  let component: Actualizar;
  let fixture: ComponentFixture<Actualizar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actualizar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actualizar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

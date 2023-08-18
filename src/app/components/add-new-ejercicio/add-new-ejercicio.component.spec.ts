import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEjercicioComponent } from './add-new-ejercicio.component';

describe('AddNewEjercicioComponent', () => {
  let component: AddNewEjercicioComponent;
  let fixture: ComponentFixture<AddNewEjercicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewEjercicioComponent]
    });
    fixture = TestBed.createComponent(AddNewEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPlanesComponent } from './add-edit-planes.component';

describe('AddEditPlanesComponent', () => {
  let component: AddEditPlanesComponent;
  let fixture: ComponentFixture<AddEditPlanesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditPlanesComponent]
    });
    fixture = TestBed.createComponent(AddEditPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

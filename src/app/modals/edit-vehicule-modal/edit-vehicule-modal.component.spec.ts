import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVehiculeModalComponent } from './edit-vehicule-modal.component';

describe('EditVehiculeModalComponent', () => {
  let component: EditVehiculeModalComponent;
  let fixture: ComponentFixture<EditVehiculeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVehiculeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVehiculeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

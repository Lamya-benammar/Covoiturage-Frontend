import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehiculeModalComponent } from './add-vehicule-modal.component';

describe('AddVehiculeModalComponent', () => {
  let component: AddVehiculeModalComponent;
  let fixture: ComponentFixture<AddVehiculeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVehiculeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVehiculeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

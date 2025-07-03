import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnnonceModalComponent } from './edit-annonce-modal.component';

describe('EditAnnonceModalComponent', () => {
  let component: EditAnnonceModalComponent;
  let fixture: ComponentFixture<EditAnnonceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAnnonceModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAnnonceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

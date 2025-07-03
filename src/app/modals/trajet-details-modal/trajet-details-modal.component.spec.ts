import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetDetailsModalComponent } from './trajet-details-modal.component';

describe('TrajetDetailsModalComponent', () => {
  let component: TrajetDetailsModalComponent;
  let fixture: ComponentFixture<TrajetDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrajetDetailsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrajetDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

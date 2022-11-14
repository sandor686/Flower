import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirkoszoruComponent } from './sirkoszoru.component';

describe('SirkoszoruComponent', () => {
  let component: SirkoszoruComponent;
  let fixture: ComponentFixture<SirkoszoruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SirkoszoruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SirkoszoruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

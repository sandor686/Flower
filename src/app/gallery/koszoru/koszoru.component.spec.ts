import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoszoruComponent } from './koszoru.component';

describe('KoszoruComponent', () => {
  let component: KoszoruComponent;
  let fixture: ComponentFixture<KoszoruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoszoruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoszoruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

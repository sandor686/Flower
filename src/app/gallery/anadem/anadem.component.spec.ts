import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnademComponent } from './anadem.component';

describe('AnademComponent', () => {
  let component: AnademComponent;
  let fixture: ComponentFixture<AnademComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnademComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnademComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

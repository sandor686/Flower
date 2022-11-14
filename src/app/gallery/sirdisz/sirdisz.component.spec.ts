import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirdiszComponent } from './sirdisz.component';

describe('SirdiszComponent', () => {
  let component: SirdiszComponent;
  let fixture: ComponentFixture<SirdiszComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SirdiszComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SirdiszComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

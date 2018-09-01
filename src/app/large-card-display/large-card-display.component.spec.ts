import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeCardDisplayComponent } from './large-card-display.component';

describe('LargeCardDisplayComponent', () => {
  let component: LargeCardDisplayComponent;
  let fixture: ComponentFixture<LargeCardDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeCardDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeCardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

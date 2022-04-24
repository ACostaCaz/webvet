import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSoftwareComponent } from './header-software.component';

describe('HeaderSoftwareComponent', () => {
  let component: HeaderSoftwareComponent;
  let fixture: ComponentFixture<HeaderSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

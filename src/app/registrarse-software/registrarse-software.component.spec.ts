import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarseSoftwareComponent } from './registrarse-software.component';

describe('RegistrarseSoftwareComponent', () => {
  let component: RegistrarseSoftwareComponent;
  let fixture: ComponentFixture<RegistrarseSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarseSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarseSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

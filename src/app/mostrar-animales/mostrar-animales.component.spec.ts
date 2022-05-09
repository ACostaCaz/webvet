import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAnimalesComponent } from './mostrar-animales.component';

describe('MostrarAnimalesComponent', () => {
  let component: MostrarAnimalesComponent;
  let fixture: ComponentFixture<MostrarAnimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarAnimalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

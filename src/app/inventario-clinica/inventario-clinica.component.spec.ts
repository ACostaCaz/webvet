import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioClinicaComponent } from './inventario-clinica.component';

describe('InventarioClinicaComponent', () => {
  let component: InventarioClinicaComponent;
  let fixture: ComponentFixture<InventarioClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioClinicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

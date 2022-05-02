import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarFacturasComponent } from './gestionar-facturas.component';

describe('GestionarFacturasComponent', () => {
  let component: GestionarFacturasComponent;
  let fixture: ComponentFixture<GestionarFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarFacturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

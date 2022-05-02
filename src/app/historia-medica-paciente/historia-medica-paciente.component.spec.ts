import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaMedicaPacienteComponent } from './historia-medica-paciente.component';

describe('HistoriaMedicaPacienteComponent', () => {
  let component: HistoriaMedicaPacienteComponent;
  let fixture: ComponentFixture<HistoriaMedicaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriaMedicaPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriaMedicaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

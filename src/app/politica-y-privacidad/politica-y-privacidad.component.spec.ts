import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaYPrivacidadComponent } from './politica-y-privacidad.component';

describe('PoliticaYPrivacidadComponent', () => {
  let component: PoliticaYPrivacidadComponent;
  let fixture: ComponentFixture<PoliticaYPrivacidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticaYPrivacidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaYPrivacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

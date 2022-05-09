import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaAnimalComponent } from './ficha-animal.component';

describe('FichaAnimalComponent', () => {
  let component: FichaAnimalComponent;
  let fixture: ComponentFixture<FichaAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

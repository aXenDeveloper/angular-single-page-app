import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosiDetaleComponent } from './herosi-detale.component';

describe('HerosiDetaleComponent', () => {
  let component: HerosiDetaleComponent;
  let fixture: ComponentFixture<HerosiDetaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerosiDetaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosiDetaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

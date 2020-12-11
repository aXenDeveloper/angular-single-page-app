import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosiComponent } from './herosi.component';

describe('HerosiComponent', () => {
  let component: HerosiComponent;
  let fixture: ComponentFixture<HerosiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerosiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

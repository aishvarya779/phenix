import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfoileComponent } from './prfoile.component';

describe('PrfoileComponent', () => {
  let component: PrfoileComponent;
  let fixture: ComponentFixture<PrfoileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrfoileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrfoileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductSmComponent } from './card-product-sm.component';

describe('CardProductSmComponent', () => {
  let component: CardProductSmComponent;
  let fixture: ComponentFixture<CardProductSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardProductSmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardProductSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

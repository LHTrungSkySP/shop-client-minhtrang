import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContributeComponent } from './card-contribute.component';

describe('CardContributeComponent', () => {
  let component: CardContributeComponent;
  let fixture: ComponentFixture<CardContributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardContributeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardContributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

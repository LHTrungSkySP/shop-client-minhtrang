import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AComponentTestComponent } from './a-component-test.component';

describe('AComponentTestComponent', () => {
  let component: AComponentTestComponent;
  let fixture: ComponentFixture<AComponentTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AComponentTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AComponentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

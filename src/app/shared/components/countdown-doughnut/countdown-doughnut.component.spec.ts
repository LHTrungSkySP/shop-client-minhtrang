import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownDoughnutComponent } from './countdown-doughnut.component';

describe('CountdownDoughnutComponent', () => {
  let component: CountdownDoughnutComponent;
  let fixture: ComponentFixture<CountdownDoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountdownDoughnutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountdownDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSortComponent } from './button-sort.component';

describe('ButtonSortComponent', () => {
  let component: ButtonSortComponent;
  let fixture: ComponentFixture<ButtonSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonSortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

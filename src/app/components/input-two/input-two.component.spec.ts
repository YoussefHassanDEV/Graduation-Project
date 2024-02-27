import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTwoComponent } from './input-two.component';

describe('InputTwoComponent', () => {
  let component: InputTwoComponent;
  let fixture: ComponentFixture<InputTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTwoComponent]
    });
    fixture = TestBed.createComponent(InputTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

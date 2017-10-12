import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRetoComponent } from './form-reto.component';

describe('FormRetoComponent', () => {
  let component: FormRetoComponent;
  let fixture: ComponentFixture<FormRetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

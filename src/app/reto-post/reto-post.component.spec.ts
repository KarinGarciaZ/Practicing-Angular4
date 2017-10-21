import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoPostComponent } from './reto-post.component';

describe('RetoPostComponent', () => {
  let component: RetoPostComponent;
  let fixture: ComponentFixture<RetoPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetoPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

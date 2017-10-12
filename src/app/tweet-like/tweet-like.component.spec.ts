import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetLikeComponent } from './tweet-like.component';

describe('TweetLikeComponent', () => {
  let component: TweetLikeComponent;
  let fixture: ComponentFixture<TweetLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

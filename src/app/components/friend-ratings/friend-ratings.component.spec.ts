import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendRatingsComponent } from './friend-ratings.component';

describe('UserProfileComponent', () => {
  let component: FriendRatingsComponent;
  let fixture: ComponentFixture<FriendRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

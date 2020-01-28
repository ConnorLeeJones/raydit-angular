import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserArtistRatingsComponent } from './user-artist-ratings.component';

describe('UserArtistRatingsComponent', () => {
  let component: UserArtistRatingsComponent;
  let fixture: ComponentFixture<UserArtistRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserArtistRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserArtistRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

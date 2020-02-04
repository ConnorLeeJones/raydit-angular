import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMovieRatingsComponent } from './user-movie-ratings.component';

describe('UserMovieRatingsComponent', () => {
  let component: UserMovieRatingsComponent;
  let fixture: ComponentFixture<UserMovieRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMovieRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMovieRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

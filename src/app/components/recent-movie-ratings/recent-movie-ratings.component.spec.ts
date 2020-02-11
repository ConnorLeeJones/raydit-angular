import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentMovieRatingsComponent } from './recent-movie-ratings.component';

describe('RecentMovieRatingsComponent', () => {
  let component: RecentMovieRatingsComponent;
  let fixture: ComponentFixture<RecentMovieRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentMovieRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentMovieRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

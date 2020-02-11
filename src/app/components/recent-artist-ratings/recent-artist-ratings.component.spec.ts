import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentArtistRatingsComponent } from './recent-artist-ratings.component';

describe('RecentArtistRatingsComponent', () => {
  let component: RecentArtistRatingsComponent;
  let fixture: ComponentFixture<RecentArtistRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentArtistRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentArtistRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

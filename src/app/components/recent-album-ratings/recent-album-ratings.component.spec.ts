import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAlbumRatingsComponent } from './recent-album-ratings.component';

describe('RecentAlbumRatingsComponent', () => {
  let component: RecentAlbumRatingsComponent;
  let fixture: ComponentFixture<RecentAlbumRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentAlbumRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentAlbumRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

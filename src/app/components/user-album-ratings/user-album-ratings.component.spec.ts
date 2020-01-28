import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAlbumRatingsComponent } from './user-album-ratings.component';

describe('UserAlbumRatingsComponent', () => {
  let component: UserAlbumRatingsComponent;
  let fixture: ComponentFixture<UserAlbumRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAlbumRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAlbumRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

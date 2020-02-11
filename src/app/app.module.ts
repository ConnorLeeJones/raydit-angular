import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './utilities/jwt-interceptor';
import { ErrorInterceptor } from './utilities/error-interceptor';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ArtistProfileComponent } from './components/artist-profile/artist-profile.component';
import { CookieService } from 'ngx-cookie-service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RatingComponent } from './components/rating/rating.component';
import { AlbumProfileComponent } from './components/album-profile/album-profile.component';
import { AlbumRatingComponent } from './components/album-rating/album-rating.component';
import { UserArtistRatingsComponent } from './components/user-artist-ratings/user-artist-ratings.component';
import { UserAlbumRatingsComponent } from './components/user-album-ratings/user-album-ratings.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { RecentRatingsComponent } from './components/recent-ratings/recent-ratings.component';
import { UserMovieRatingsComponent } from './components/user-movie-ratings/user-movie-ratings.component';
import { MovieProfileComponent } from './components/movie-profile/movie-profile.component';
import { MovieRatingComponent } from './components/movie-rating/movie-rating.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FriendRatingsComponent } from './components/friend-ratings/friend-ratings.component';
import { RecentArtistRatingsComponent } from './components/recent-artist-ratings/recent-artist-ratings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    SearchBarComponent,
    ArtistProfileComponent,
    UserProfileComponent,
    RatingComponent,
    AlbumProfileComponent,
    AlbumRatingComponent,
    UserArtistRatingsComponent,
    UserAlbumRatingsComponent,
    UserSearchComponent,
    RecentRatingsComponent,
    UserMovieRatingsComponent,
    MovieProfileComponent,
    MovieRatingComponent,
    MovieSearchComponent,
    FriendRatingsComponent,
    RecentArtistRatingsComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
  ],
  exports: [
    RecentArtistRatingsComponent
  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})

// const { search, searchActor, simpleSearch } = require("./lib/search");

export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

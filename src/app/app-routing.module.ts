import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './utilities/auth-guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ArtistProfileComponent } from './components/artist-profile/artist-profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'search/artist', component: SearchBarComponent },
  { path: 'artist/:id', component: ArtistProfileComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { FilmsComponent } from './films/films.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayMoviesDirective } from './display-movies.directive';
import { MenuComponent } from './menu/menu.component'; // <-- NgModel lives here
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: '',
    redirectTo: '/user-profile',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    FilmsComponent,
    HighlightDirective,
    DisplayMoviesDirective,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

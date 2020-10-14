import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ButtonComponent } from './components/button/button.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PersonalComponent } from './pages/personal/personal.component'
import { PostsInterceptor } from './posts.interceptor';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PersonalMainComponent } from './pages/personal-main/personal-main.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { AuthGuard } from './auth.guard';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { NewPostComponent } from './pages/new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ButtonComponent,
    PersonalComponent,
    PostCardComponent,
    PersonalMainComponent,
    PostDetailsComponent,
    CommentCardComponent,
    AlbumCardComponent,
    UserDetailsComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: PostsInterceptor,
    multi: true
  },
  AuthGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }

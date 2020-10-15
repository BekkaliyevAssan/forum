import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { PersonalMainComponent } from './pages/personal-main/personal-main.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'personal/:id', component: PersonalComponent, children: [
    {path: 'new-post', component: NewPostComponent},
    {path: '', component: PersonalMainComponent},
    {path: ':post-id', component: PostDetailsComponent},
    {path: 'album/:album-id', component: PhotosComponent}
  ]},
  {path: 'user/:id', component: UserDetailsComponent, children: [
    {path: '', component: PersonalMainComponent},
    {path: ':post-id', component: PostDetailsComponent},
    {path: 'album/:album-id', component: PhotosComponent},
    // {path: 'album/:album-id', component: PhotosComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

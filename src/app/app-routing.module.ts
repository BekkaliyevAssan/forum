import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PersonalMainComponent } from './pages/personal-main/personal-main.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'personal/:id', component: PersonalComponent, children: [
    {path: '', component: PersonalMainComponent},
    {path: ':post-id', component: PostDetailsComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import { CourseListComponent } from '../course-list/course-list.component';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: 'courses', component: CourseListComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})

export class PagesRoutingModule { }

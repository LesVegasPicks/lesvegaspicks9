import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { AuthenticationComponent } from '../components/authentication/authentication.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../components/register/register.component';
import {DashboardComponent} from '../components/dashboard/dashboard.component';

import { ContentfulService } from '../contentful.service';
import { MdToHtmlPipe } from '../md-to-html.pipe';
import { CourseListComponent } from '../course-list/course-list.component';

@NgModule({
  declarations: [LoginComponent, AuthenticationComponent, RegisterComponent, DashboardComponent,  MdToHtmlPipe, CourseListComponent],
  imports: [
    CommonModule, 
    HomeModule,
    PagesRoutingModule,
    ReactiveFormsModule,
  ],

providers: [
    ContentfulService
  ],


})
export class PagesModule { }

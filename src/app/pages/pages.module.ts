import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ContentfulService } from '../contentful.service';
import { MdToHtmlPipe } from '../md-to-html.pipe';
import { CourseListComponent } from '../course-list/course-list.component';


// App components
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from 'src/app/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from 'src/app/components/verify-email/verify-email.component';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

// Auth service
import { AuthService } from "src/app/services/auth.service";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [ SignInComponent, SignUpComponent, ForgotPasswordComponent, VerifyEmailComponent, DashboardComponent,  MdToHtmlPipe, CourseListComponent, LoginComponent, RegisterComponent, CheckoutComponent],
  imports: [
    CommonModule, 
    HomeModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)


  ],

providers: [
    ContentfulService,
    AuthService
  ],


})
export class PagesModule { }

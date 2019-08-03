import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from '../components/authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ LoginComponent, AuthenticationComponent],
  imports: [
    CommonModule, 
    HomeModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }

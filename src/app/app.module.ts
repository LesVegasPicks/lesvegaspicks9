import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';


import { RegisterComponent } from './components/register/register.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { NgxLoadingModule } from 'ngx-loading';
import { LayoutModule } from './layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular-6-social-login-v2";
import { from } from 'rxjs';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("1072643061885-sq92dlsc260pd7atlujial8svojgr905.apps.googleusercontent.com")
        }
        
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    SocialLoginModule,
    LayoutModule,
    ReactiveFormsModule,

    NgxLoadingModule.forRoot({})
  ],
  providers: [HttpClient,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }  
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
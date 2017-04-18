import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { BusinessloginComponent } from './components/businesslogin/businesslogin.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BusinessprofileComponent } from './components/businessprofile/businessprofile.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

import { CustomervalidateService } from './services/customervalidate.service';
import { BusinessvalidateService } from './services/businessvalidate.service';
import { AuthService } from './services/auth.service';

import {FlashMessagesModule} from 'angular2-flash-messages';

var appRoutes: Routes =[
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'businesslogin', component: BusinessloginComponent},
  {path:'customerlogin', component: CustomerloginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'customerprofile', component: ProfileComponent},
  {path:'businessprofile', component: ProfileComponent},
  {path:'subscribe', component: SubscribeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomerloginComponent,
    BusinessloginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SubscribeComponent,
    BusinessprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [CustomervalidateService, BusinessvalidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

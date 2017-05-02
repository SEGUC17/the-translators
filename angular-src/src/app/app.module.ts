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
import { BookingComponent } from './components/booking.component';
import {BookingrequestComponent} from './components/bookingrequest/bookingrequest.component';
import {UploadproductsComponent } from './components/uploadproducts/uploadproducts.component';
import { ReviewandrateComponent } from './components/reviewandrate/reviewandrate.component';
import { VisitorComponent } from './components/visitor.component';

import { CustomervalidateService } from './services/customervalidate.service';
import { BookingvalidationService } from './services/bookingvalidation.service';
import { BusinessvalidateService } from './services/businessvalidate.service';
import { UploadproductsvalidateService  } from './services/uploadproductsvalidate.service';
import { AuthService } from './services/auth.service';
import { ReviewandrateService  } from './services/reviewandrate.service';

import {FlashMessagesModule} from 'angular2-flash-messages';

import {CartComponent} from './components/ShoppingCart/Cart/cart.component';
import {ProductComponent} from './components/ShoppingCart/Product/product.component';
import {ProductDetailComponent} from './components/ShoppingCart/ProductDetail/product-detail.component';

var appRoutes: Routes =[
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'businesslogin', component: BusinessloginComponent},
  {path:'customerlogin', component: CustomerloginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'customerprofile', component: ProfileComponent},
  {path:'businessprofile', component: BusinessprofileComponent},
  {path:'subscribe', component: SubscribeComponent},  
  {path:'bookingrequest', component: BookingrequestComponent},
   {path:'MyBookings', component: BookingComponent},
  {path:'uploadproducts', component: UploadproductsComponent},  
  {path: 'reviewandrate', component: ReviewandrateComponent},
  {path:'subscribe', component: SubscribeComponent},
  {path:'app-root', component: AppComponent},
  {path: 'app-navbar', component: NavbarComponent},
    {path: 'cart', component: CartComponent},
    {path: 'product', component: ProductComponent},
    {path: 'product-detail', component: ProductDetailComponent},
    {path: 'visitorView', component: VisitorComponent},
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
    BusinessprofileComponent,
    BookingrequestComponent,
    UploadproductsComponent,
    BookingComponent,
    ReviewandrateComponent,
    CartComponent,
    ProductComponent,
    ProductDetailComponent,
    VisitorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [CustomervalidateService, BusinessvalidateService, AuthService, BookingvalidationService, UploadproductsvalidateService, ReviewandrateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

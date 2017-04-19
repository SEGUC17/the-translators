import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ReviewandRateComponent} from './reviewandrate.component';
import {ViewGymPageComponent} from './viewgympage.component'; 
@NgModule({
  declarations: [
    AppComponent,
   ReviewandRateComponent,
   ViewGymPageComponent,
   
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

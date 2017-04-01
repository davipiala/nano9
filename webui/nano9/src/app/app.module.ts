import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/base/login/login.component';
import { HomeComponent } from './modules/base/home/home.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AuthGuard } from './modules/base/auth/auth.guard';
import { routing } from './modules/base/route/app.routing';
import { HeaderComponent } from './modules/base/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
   AgmCoreModule.forRoot({ apiKey: 'AIzaSyB1cnH31mksVvJJGm04eu9NrfidKr_Ava8'})
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

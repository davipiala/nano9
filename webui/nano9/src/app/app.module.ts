import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/base/login/login.component';
import { HomeComponent } from './modules/base/home/home.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AuthGuard } from './modules/base/auth/auth.guard';
import { routing } from './modules/base/route/app.routing';
import { HeaderComponent } from './modules/base/header/header.component';
import { LoginService } from './modules/base/service/login.service';
import { EdificioComponent } from './modules/cadastro/edificio/edificio.component';
import { EstacionamentoComponent } from './modules/cadastro/estacionamento/estacionamento.component';
import { HistoryComponent } from './modules/timeline/history/history.component';
import { PostComponent } from './modules/timeline/post/post.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    EdificioComponent,
    EstacionamentoComponent,
    HistoryComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    Ng2SmartTableModule,
   AgmCoreModule.forRoot({ apiKey: 'AIzaSyB1cnH31mksVvJJGm04eu9NrfidKr_Ava8'})
  ],
  providers: [AuthGuard,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

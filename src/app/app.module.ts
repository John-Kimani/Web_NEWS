import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'; //imports https client module
import { NewsapiserviceService } from './services/newsapiservice.service'; // imports news service

import { NavbarComponent } from './components/navbar/navbar.component';
import { TopstoryComponent } from './components/topstory/topstory.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopstoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiserviceService], //mention service as provider
  bootstrap: [AppComponent]
})
export class AppModule { }

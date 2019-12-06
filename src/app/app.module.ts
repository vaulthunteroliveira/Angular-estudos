import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';
import { from } from 'rxjs';
import { UserService } from 'src/services/user.services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

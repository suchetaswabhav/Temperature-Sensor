import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes.service';

import { ViewsModule } from './views/views.module';
import { ErrorModule } from './views/errors/error.module';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxLoadingModule } from 'ngx-loading';
// main layout
import { NavigationModule } from './main-layout/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule,
    AppRoutes,
    RouterModule,
    FormsModule,
    ViewsModule,
    ErrorModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxLoadingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

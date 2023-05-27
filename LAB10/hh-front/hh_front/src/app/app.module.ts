import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VacanciesComponent } from './vacancies/vacancies.component';
import { CompaniesComponent } from './companies/companies.component';


@NgModule({
  declarations: [
    AppComponent,
    VacanciesComponent,
    CompaniesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

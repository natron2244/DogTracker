import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DgDashboardComponent } from './dg-dashboard/dg-dashboard.component';
import { DgAddDogComponent } from './forms/dg-add-dog/dg-add-dog.component';

@NgModule({
  declarations: [
    AppComponent,
    DgDashboardComponent,
    DgAddDogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

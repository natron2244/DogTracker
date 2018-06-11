import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// All Material imports
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DgDashboardComponent } from './dg-dashboard/dg-dashboard.component';
import { DgAddDogComponent } from './forms/dg-add-dog/dg-add-dog.component';

import { AppRoutingModule } from './/app-routing.module';
import { DgNavComponent } from './dg-nav/dg-nav.component';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    DgDashboardComponent,
    DgAddDogComponent,
    DgNavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

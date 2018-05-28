import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DogChangerDirective } from './playarea/dog.directive';
import { TestFormComponent } from './playarea/test-form/test-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DogChangerDirective,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

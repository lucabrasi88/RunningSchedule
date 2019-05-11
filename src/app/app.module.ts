import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NeweventFormComponent } from './newevent-form/newevent-form.component';
import { AlleventsComponent } from './allevents/allevents.component';

@NgModule({
  declarations: [
    AppComponent,
    NeweventFormComponent,
    AlleventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

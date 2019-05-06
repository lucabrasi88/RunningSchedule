import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NeweventFormComponent } from './newevent-form/newevent-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NeweventFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

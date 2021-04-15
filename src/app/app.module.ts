import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaqsComponent } from './faqs/faqs.component';
import { EAlertComponent } from './e-alert/e-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqsComponent,
    EAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

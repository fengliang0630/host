import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HostListenerDirective } from './hostListener/host.listener.directive';

import { AppComponent } from './app.component';
import { HostListener1Directive } from './hostListener/host.listener1.directive';


@NgModule({
  declarations: [
    AppComponent,
    HostListenerDirective,
    HostListener1Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

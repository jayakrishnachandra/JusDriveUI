import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    { provide: PLATFORM_ID, useValue: 'browser' } // explicitly provide PLATFORM_ID
  ]
}).catch(err => console.error(err));

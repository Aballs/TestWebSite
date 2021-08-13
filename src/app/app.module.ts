import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BmwThemeModule } from '@bmw-ds/components';
import { ButtonModule } from '@bmw-ds/components';
import { ContentTabModule } from '@bmw-ds/components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BmwThemeModule,
    ButtonModule,
    ContentTabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnChangesModule } from './on-changes/on-changes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OnChangesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Glue42Ng } from '@glue42/ng';
import GlueWebPlatform from '@glue42/web-platform';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Glue42Ng.forRoot({ webPlatform: { factory: GlueWebPlatform }, holdInit: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

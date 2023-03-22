import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterAreaComponent } from './footer/footer-area/footer-area.component';
import { LogoComponent } from './logo/logo.component';
import { SocialMediaComponent } from './footer/social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterAreaComponent,
    LogoComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

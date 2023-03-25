import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterAreaComponent } from './footer/footer-area/footer-area.component';
import { LogoComponent } from './logo/logo.component';
import { SocialMediaComponent } from './footer/social-media/social-media.component';
import { SkillsetAreaComponent } from './skillset/skillset-area/skillset-area.component';
import { SkillGridComponent } from './skillset/skill-grid/skill-grid.component';
import { IntroductionAreaComponent } from './introduction/introduction-area/introduction-area.component';
import { ButtonComponent } from './button/button.component';
import { ProjectsAreaComponent } from './projects/projects-area/projects-area.component';
import { ProjectComponent } from './projects/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterAreaComponent,
    LogoComponent,
    SocialMediaComponent,
    SkillsetAreaComponent,
    SkillGridComponent,
    IntroductionAreaComponent,
    ButtonComponent,
    ProjectsAreaComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

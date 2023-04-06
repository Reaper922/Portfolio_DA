import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterAreaComponent } from './footer/footer-area/footer-area.component';
import { LogoComponent } from './logo/logo.component';
import { SocialMediaFooterComponent } from './footer/social-media-footer/social-media-footer.component';
import { SkillsetAreaComponent } from './skillset/skillset-area/skillset-area.component';
import { SkillGridComponent } from './skillset/skill-grid/skill-grid.component';
import { IntroductionAreaComponent } from './introduction/introduction-area/introduction-area.component';
import { ButtonComponent } from './button/button.component';
import { ProjectsAreaComponent } from './projects/projects-area/projects-area.component';
import { ProjectComponent } from './projects/project/project.component';
import { HeroAreaComponent } from './hero/hero-area/hero-area.component';
import { NavbarComponent } from './hero/navbar/navbar.component';
import { BubbleComponent } from './bubble/bubble.component';
import { ContactAreaComponent } from './contact/contact-area/contact-area.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { NavmenuComponent } from './hero/navmenu/navmenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './pages/main/main.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterAreaComponent,
    LogoComponent,
    SocialMediaFooterComponent,
    SkillsetAreaComponent,
    SkillGridComponent,
    IntroductionAreaComponent,
    ButtonComponent,
    ProjectsAreaComponent,
    ProjectComponent,
    HeroAreaComponent,
    NavbarComponent,
    BubbleComponent,
    ContactAreaComponent,
    ContactFormComponent,
    NavmenuComponent,
    MainComponent,
    LegalNoticeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

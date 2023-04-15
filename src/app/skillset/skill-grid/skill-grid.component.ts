import { Component } from '@angular/core';
import { skill } from 'src/app/models/types';

@Component({
  selector: 'app-skill-grid',
  templateUrl: './skill-grid.component.html',
  styleUrls: ['./skill-grid.component.scss']
})
export class SkillGridComponent {
  skills: skill[] = [
    {
      skill: "Angular",
      alt: "Angular Icon",
      iconUrl: "/assets/icons/angular_white.svg"
    },
    {
      skill: "TypeScript",
      alt: "TypeScript Icon",
      iconUrl: "/assets/icons/typescript_white.svg"
    },
    {
      skill: "JavaScript",
      alt: "JavaScript Icon",
      iconUrl: "/assets/icons/javascript_white.svg"
    },
    {
      skill: "HTML",
      alt: "HTML Icon",
      iconUrl: "/assets/icons/html_white.svg"
    },
    {
      skill: "Scrum",
      alt: "Scrum Icon",
      iconUrl: "/assets/icons/scrum_white.svg"
    },
    {
      skill: "Firebase",
      alt: "Firebase Icon",
      iconUrl: "/assets/icons/firebase_white.svg"
    },
    {
      skill: "GIT",
      alt: "GIT Icon",
      iconUrl: "/assets/icons/git_white.svg"
    },
    {
      skill: "CSS",
      alt: "CSS Icon",
      iconUrl: "/assets/icons/css_white.svg"
    },
    {
      skill: "Rest-API",
      alt: "Rest-API Icon",
      iconUrl: "/assets/icons/rest-api_white.svg"
    },
    {
      skill: "Material Design",
      alt: "Material Design Icon",
      iconUrl: "/assets/icons/material-design_white.svg"
    }
]}

import { Component } from '@angular/core';
import { project } from 'src/app/models/types';

@Component({
  selector: 'app-projects-area',
  templateUrl: './projects-area.component.html',
  styleUrls: ['./projects-area.component.scss']
})
export class ProjectsAreaComponent {
  projects: project[] = [
    {
      title: "Join",
      stack: "Angular | TypeScript | HTML | CSS | Firebase",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      github: "www.github.com",
      prevImageUrl: "/assets/img/join.jpg"
    },
    {
      title: "El Pollo Loco",
      stack: "JavaScript | HTML | CSS",
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      github: "www.github.com",
      prevImageUrl: "/assets/img/el_pollo_loco.jpg"
    },
    {
      title: "Simple CRM",
      stack: "Angular | TypeScript | HTML | CSS | Firebase",
      description: "A very Simple Customer Relationship Management system working with CRUD functionality. ",
      github: "www.github.com",
      prevImageUrl: "/assets/img/simple_crm.jpg"
    },
    {
      title: "Pokedex",
      stack: "JavaScript | HTML | CSS | API",
      description: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      github: "www.github.com",
      prevImageUrl: "/assets/img/pokedex.jpg"
    },
    {
      title: "Crypto Converter",
      stack: "Angular | TypeScript | Rest-API | HTML | CSS",
      description: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      github: "www.github.com",
      prevImageUrl: "/assets/img/crypto_converter.jpg"
    }
  ]
}

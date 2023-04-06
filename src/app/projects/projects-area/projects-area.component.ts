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
      stack: "JavaScript | HTML | CSS",
      description: "A task manager inspired by the Kanban method. You can create and organize tasks using drag and drop, assign tasks to users and define subtasks.",
      github: "https://github.com/Reaper922/Join_DA",
      projectUrl: 'https://join.dennisammen.de',
      prevImageUrl: "/assets/img/join.jpg"
    },
    {
      title: "Captain Clown Nose",
      stack: "JavaScript | HTML | CSS",
      description: "A pirate themed jump and run game implemented using the object-oriented approach. Try your luck and collect all coins! ",
      github: "https://github.com/Reaper922/PirateGame_DA",
      projectUrl: 'https://game.dennisammen.de',
      prevImageUrl: "/assets/img/el_pollo_loco.jpg"
    },
    {
      title: "Simple CRM",
      stack: "Angular | TypeScript | HTML | CSS | Firebase",
      description: "A very Simple Customer Relationship Management system working with CRUD functionality. ",
      github: "https://www.github.com",
      projectUrl: '',
      prevImageUrl: "/assets/img/simple_crm.jpg"
    },
    {
      title: "Pokedex",
      stack: "JavaScript | HTML | CSS | API",
      description: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      github: "https://www.github.com",
      projectUrl: '',
      prevImageUrl: "/assets/img/pokedex.jpg"
    }
  ]
}

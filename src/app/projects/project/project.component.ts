import { Component, Input } from '@angular/core';
import { project } from 'src/app/models/types';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project!: project;
  @Input() isSecondElement!: number;
}

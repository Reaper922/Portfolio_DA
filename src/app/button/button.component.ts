import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() btnText: string = 'Button works!';
  @Input() href: string = '#';
  @Input() target: string = '_self';
  @Input() style: string = 'primary';
}

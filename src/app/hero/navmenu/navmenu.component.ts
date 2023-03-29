import { Component } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavmenuComponent {
  isMenuOpen: boolean = false;

  /**
   * Toggles the navmenu.
   */
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.setBodyScroll();
  }

  /**
   * Deactivates scrolling on the body element, when the navmenu is open.
   */
  setBodyScroll() {
    if (this.isMenuOpen) {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }
}

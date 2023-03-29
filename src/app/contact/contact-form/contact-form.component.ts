import { Component, ElementRef, Testability, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  @ViewChild('name') nameEl!: ElementRef;
  @ViewChild('email') emailEl!: ElementRef;
  @ViewChild('message') messageEl!: ElementRef;

  ngAfterViewInit() {
    this.nameEl.nativeElement.onchange = (event: Event) => this.onInputChange(event);
    this.emailEl.nativeElement.onchange = (event: Event) => this.onInputChange(event);
    this.messageEl.nativeElement.onchange = (event: Event) => this.onInputChange(event);
  }

  /**
   * Function that gets triggered every time the input changes.
   * @param event Input change event.
   */
  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;

    this.showValidationResponse(target);
  }

  /**
   * Displays a validation response for the input fields.
   * @param target Event target element (input, textarea).
   */
  showValidationResponse(target: HTMLInputElement | HTMLTextAreaElement): void {
    const errorEl = document.getElementById(`${target.id}-error`);
    
    if (!target.checkValidity()) {
      target.style.background = "white url('/assets/icons/error.svg') no-repeat right 25px top 10px";
      errorEl!.style.display = 'inline';
    } else {
      target.style.background = "white url('/assets/icons/valid.svg') no-repeat right 25px top 10px";
      errorEl!.style.display = 'none';
    }
  }
 }
 
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
  @ViewChild('bubble') bubbleEl!: ElementRef;

  isInputValid: { [input: string]: boolean } = {
    'name': false,
    'email': false,
    'message': false
  }


  ngAfterViewInit() {
    this.nameEl.nativeElement.onkeyup = (event: Event) => this.onInputKeyUp(event);
    this.emailEl.nativeElement.onkeyup = (event: Event) => this.onInputKeyUp(event);
    this.messageEl.nativeElement.onkeyup = (event: Event) => this.onInputKeyUp(event);
  }

  /**
   * Function that gets triggered every time the onkeyup event is triggered on the input elements.
   * @param event KeyUp event.
   */
  onInputKeyUp(event: Event): void {
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
      this.isInputValid[target.id] = false;
    } else {
      target.style.background = "white url('/assets/icons/valid.svg') no-repeat right 25px top 10px";
      errorEl!.style.display = 'none';
      this.isInputValid[target.id] = true;
    }
  }

  /**
   * Sends an email with the filled in form data to the server.
   */
  async sendMail() {
    const nameText = this.nameEl.nativeElement.value;
    const emailText = this.emailEl.nativeElement.value;
    const messageText = this.messageEl.nativeElement.value;
    const bubbleEl = this.bubbleEl.nativeElement;
    const isFormValid = this.isInputValid['name'] && this.isInputValid['email'] && this.isInputValid['message'];
    const data = new FormData();

    if (isFormValid) {
      data.append('name', nameText);
      data.append('mail', emailText);
      data.append('message', messageText);
      bubbleEl.style.display = 'inline';
      bubbleEl.className = 'mail-bubble mail-animation';
      
      await fetch('https://server.dennisammen.de/portfolio_mail/send_mail.php',
      {
        method: 'post',
        body: data
      })
      
      this.resetForm();
    }
  }

  /**
   * Resets the form after the email has been send.
   */
  resetForm() {
    this.resetInputElements();
    this.resetErrorMessages();
    this.resetInputValidation();
    setTimeout(() => {this.resetBubble()}, 3000);
  }

  /**
   * Resets the value and styling of the input elements.
   */
  resetInputElements() {
    this.nameEl.nativeElement.value = '';
    this.emailEl.nativeElement.value = '';
    this.messageEl.nativeElement.value = '';
    
    this.nameEl.nativeElement.style.background = "white";
    this.emailEl.nativeElement.style.background = "white";
    this.messageEl.nativeElement.style.background = "white";
  }

  /**
   * Hides the error messages for failed validation.
   */
  resetErrorMessages() {
    document.getElementById(`name-error`)!.style.display = 'none';
    document.getElementById(`email-error`)!.style.display = 'none';
    document.getElementById(`message-error`)!.style.display = 'none';
  }

  /**
   * Resets the input validation.
   */
  resetInputValidation() {
    this.isInputValid['name'] = false;
    this.isInputValid['email'] = false;
    this.isInputValid['message'] = false;
  }

  /**
   * Resets the mail info bubble.
   */
  resetBubble() {
    this.bubbleEl.nativeElement.style.display = 'none';
    this.bubbleEl.nativeElement.className = 'mail-bubble';
  }
 }
 
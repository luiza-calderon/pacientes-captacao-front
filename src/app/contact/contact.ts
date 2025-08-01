import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact as ContactModel } from '../../models/Contact';
import { CommonModule } from '@angular/common';
import { PhonePipe } from '../../pipes/PhonePipe';
import { FullNamePipe } from '../../pipes/FullNamePipe';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, FullNamePipe, PhonePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  submitted = false;
  success = true;
  submittedFullName: string = '';
  submittedPhone: string = '';

  contactForm = new FormGroup({
    fullName: new FormControl('', {
      updateOn: 'blur',
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ]
    }),
    ddd: new FormControl('', {
      updateOn: 'blur',
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(3),
        Validators.pattern(/^\d+$/)
      ]
    }),
    number: new FormControl('', {
      updateOn: 'blur',
      validators: [
        Validators.required,
        Validators.maxLength(9),
        Validators.minLength(8),
        Validators.pattern(/^\d+$/)
      ]
    }),
    message: new FormControl('', {
      updateOn: 'blur',
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(250),
      ]
    }),
    legal: new FormControl(false, {
      validators: [
        Validators.requiredTrue,
      ]
    }),
  });

  get fullName() {
    return this.contactForm.get('fullName');
  }

  get ddd() {
    return this.contactForm.get('ddd');
  }

  get number() {
    return this.contactForm.get('number');
  }

  get message() {
    return this.contactForm.get('message');
  }

  get legal() {
    return this.contactForm.get('legal');
  }

  onSubmit() {
    this.submitted = true;

    if (!this.contactForm.valid) {
      return;
    }

    console.warn(this.contactForm.valid);
    const contact: ContactModel = {
      fullName: this.fullName?.value?.trim()!,
      ddd: this.ddd?.value!,
      number: this.number?.value!,
      message: this.message?.value?.trim()!
    };
    this.submittedFullName = contact.fullName;
    this.submittedPhone = contact.ddd.concat(contact.number);
    this.contactForm.reset();
    this.submitted = false;
    this.success = true;
  }

  newMessage() {
    this.success = false;
  }

  onlyNumbersFromTextInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replaceAll(/\D/g, '');
  }

  trimStartTextInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.trimStart();
  }

}

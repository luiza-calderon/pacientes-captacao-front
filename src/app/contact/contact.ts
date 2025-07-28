import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact as ContactModel } from '../../model/Contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  areasAtuacao = [];
  estados = [];

  contactForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),
    ddd: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(3),
    ]),
    number: new FormControl('', [
      Validators.required,
      Validators.maxLength(9),
      Validators.minLength(8),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(250),
    ]),
    legal: new FormControl(false, [
      Validators.requiredTrue,
    ]),
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

  submitted = false;

  onSubmit() {
    this.submitted = true;

    console.warn(this.contactForm.get('fullName')?.valid);
  }

}

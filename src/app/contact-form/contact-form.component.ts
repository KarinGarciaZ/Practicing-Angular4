import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' }
  ];

  payWith = [
    { id: 1, name: 'Card' },
    { id: 2, name: 'Paypal' }
  ];
  
  submit(x){ console.log(x); }
}

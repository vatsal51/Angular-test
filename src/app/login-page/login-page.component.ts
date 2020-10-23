import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { ThankyouComponent } from '../thankyou/thankyou.component';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({
    name: new FormControl({ value: 'Vatsal', disabled: true }), //hard coded to be displayed over login page
    email: new FormControl({ value: 'abc@example.com', disabled: true }), //disabled can't edit the values
    phone: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/),
        // to get the phone number of max 10 digit
      ])
    ),
  });

  // constructor() { }

  ngOnInit(): void {}

  onSubmit() {
    console.log('Hi');
    console.log(
      this.signUpForm.controls.name.value,
      this.signUpForm.controls.email.value
    );
    let loc = document.location;
    console.log(loc);
    loc.pathname = 'thankyou';
    // storing values in local storage to make it available on thanyou page console
    localStorage.setItem('name', this.signUpForm.controls.name.value);
    localStorage.setItem('email', this.signUpForm.controls.email.value);
    localStorage.setItem('phone', this.signUpForm.controls.phone.value);
  }
}

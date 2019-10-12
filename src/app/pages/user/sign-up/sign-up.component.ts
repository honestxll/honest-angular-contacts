import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less'],
})
export class SignUpComponent implements OnInit {
  signInForm = this.formBuilder.group({
    username: [''],
    password: ['', Validators.required, Validators.minLength(6)],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  get username() {
    return this.signInForm.get('username');
  }

  get password() {
    return this.signInForm.get('password');
  }

  onSubmit() {
    console.log('Submit: ', this.signInForm.value);
  }
}

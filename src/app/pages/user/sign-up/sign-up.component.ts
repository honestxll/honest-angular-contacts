import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';
import { ResponseDto } from 'src/app/dtos/response.dto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less'],
})
export class SignUpComponent implements OnInit {
  signUpForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) {}

  ngOnInit() {}

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  onSubmit() {
    console.log('Submit: ', this.signUpForm.value);
    if (this.signUpForm.valid) {
      this.userService.signUp(this.signUpForm.value).subscribe({
        next: val => console.log(val),
        error: error => {
          if (!error.ok) {
            Swal.mixin({
              toast: true,
              position: 'center',
              showConfirmButton: false,
              timer: 3000,
              title: '登录失败',
            });
          }
        },
      });
    }
  }
}

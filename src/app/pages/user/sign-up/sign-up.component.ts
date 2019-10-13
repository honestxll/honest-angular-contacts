import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ErrorDto, SessionSuccessDto } from 'src/app/dtos/response.dto';
import { Toast } from '../../../utils/toast';
import { Router } from '@angular/router';

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
    private router: Router,
  ) {}

  ngOnInit() {}

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.userService.signUp(this.signUpForm.value).subscribe({
        next: (response: SessionSuccessDto) => {
          console.log(response);
          Toast.fire({
            type: 'success',
            title: '注册成功',
          });
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
          setTimeout(() => {
            this.router.navigate(['/contacts']);
          }, 1500);
        },
        error: (error: ErrorDto) => {
          if (!error.ok) {
            let msg = '';
            if (error.status === 409) {
              msg = ',邮箱已被占用';
            }
            Toast.fire({
              type: 'error',
              title: `注册失败${msg}`,
            });
          }
        },
      });
    }
  }
}

import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SessionSuccessDto, ErrorDto } from '../../../dtos/response.dto';
import { Toast } from '../../../utils/toast';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { sessionTransition } from '../../../animations/user.animations';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less'],
  animations: [sessionTransition],
})
export class SignInComponent implements OnInit {
  @HostBinding('@sessionTransition') state = 'activated';
  signInForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) {}

  ngOnInit() {}

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  onSubmit() {
    if (this.signInForm.valid) {
      this.userService.signIn(this.signInForm.value).subscribe({
        next: (response: SessionSuccessDto) => {
          console.log(response);
          Toast.fire({
            type: 'success',
            title: '登录成功',
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
            if (error.status === 401) {
              msg = ',邮箱或密码错误';
            }
            Toast.fire({
              type: 'error',
              title: `登录失败${msg}`,
            });
          }
        },
      });
    }
  }
}

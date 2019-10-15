import { Component, OnInit, HostBinding } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ErrorDto, SessionSuccessDto } from 'src/app/dtos/response.dto';
import { Router } from '@angular/router';
import { Toast } from '../../../utils/toast';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less'],
})
export class SignUpComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onSubmit(signUpForm) {
    this.userService.signUp(signUpForm).subscribe({
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

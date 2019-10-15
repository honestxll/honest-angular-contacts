import { Component, OnInit, HostBinding } from '@angular/core';
import { SessionSuccessDto, ErrorDto } from '../../../dtos/response.dto';
import { Toast } from '../../../utils/toast';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less'],
})
export class SignInComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {}

  onSubmit(signInForm) {
    this.userService.signIn(signInForm).subscribe({
      next: (response: SessionSuccessDto) => {
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

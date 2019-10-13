import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Toast } from '../../utils/toast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit {
  user: User;
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  logout() {
    this.userService.logout().subscribe(() => {
      localStorage.clear();
      Toast.fire({
        type: 'success',
        title: '退出登录成功',
      });
      setTimeout(() => {
        this.router.navigateByUrl('/sign-in');
      }, 1500);
    });
  }
}

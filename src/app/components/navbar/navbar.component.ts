import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit {
  user: User;
  constructor() {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }
}
